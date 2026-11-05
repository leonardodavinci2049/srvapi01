import {
  Injectable,
  Logger,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { createPool, Pool, PoolConnection, PoolOptions } from 'mysql2/promise';
import { envs } from 'src/core/config/envs';
import { writeLocalLog } from 'src/core/utils/functions/write_local_log';
import { DatabasePoolQueueFullError } from './db-connection.errors';

@Injectable()
export class DbConnectionService
  implements OnModuleInit, OnApplicationShutdown
{
  private readonly poolConnection: Pool;
  private poolClosePromise: Promise<void> | undefined;
  private lastPoolSaturationWarningAt: number | undefined;
  private readonly logger = new Logger(DbConnectionService.name);

  constructor() {
    const config: PoolOptions = {
      host: envs.DATABASE_HOST,
      port: envs.DATABASE_PORT,
      database: envs.DATABASE_NAME,
      user: envs.DATABASE_USER,
      password: envs.DATABASE_PASSWORD,
      waitForConnections: true,
      connectionLimit: envs.DATABASE_POOL_CONNECTION_LIMIT,
      queueLimit: envs.DATABASE_POOL_QUEUE_LIMIT,
      connectTimeout: envs.DATABASE_CONNECT_TIMEOUT_MS,
    };

    this.poolConnection = createPool(config);
    this.poolConnection.on('enqueue', () => this.logPoolSaturation());
  }

  async onModuleInit(): Promise<void> {
    let connection: PoolConnection | undefined;
    try {
      connection = await this.getConnection();
      this.logger.log('database_connection_initialized');
    } catch (error: unknown) {
      await this.logError('database_connection_initialization_failed', error);
      try {
        await this.closePool();
      } catch {
        // Closing already logged its failure; keep the initialization failure.
      }
      throw new Error('Initial database connection check failed.');
    } finally {
      connection?.release();
    }
  }

  public getPool(): Pool {
    return this.poolConnection;
  }

  public async getConnection(): Promise<PoolConnection> {
    try {
      return await this.poolConnection.getConnection();
    } catch (error: unknown) {
      // mysql2 supplies no code for queue rejection. Only classify acquisition.
      if (error instanceof Error && error.message === 'Queue limit reached.') {
        await this.logError('database_pool_queue_full');
        throw new DatabasePoolQueueFullError();
      }
      await this.logError('database_connection_acquisition_failed', error);
      throw error;
    }
  }

  async withConnection<T>(
    callback: (connection: PoolConnection) => Promise<T>,
  ): Promise<T> {
    const connection = await this.getConnection();
    try {
      return await callback(connection);
    } finally {
      connection.release();
    }
  }

  onApplicationShutdown(): Promise<void> {
    return this.closePool();
  }

  private closePool(): Promise<void> {
    // Retain the same promise even on rejection; never call end twice.
    this.poolClosePromise ??= Promise.resolve()
      .then(() => this.poolConnection.end())
      .then(() => {
        this.logger.log('database_pool_closed');
      })
      .catch(async (error: unknown) => {
        await this.logError('database_pool_close_failed', error);
        throw new Error('Database connection pool shutdown failed.');
      });
    return this.poolClosePromise;
  }

  private async logError(event: string, error?: unknown): Promise<void> {
    const code = this.getErrorCode(error);
    const diagnostic = { event, code: code ?? null };
    this.logger.error(diagnostic);
    await writeLocalLog(DbConnectionService.name, diagnostic, 'error');
  }

  private getErrorCode(error: unknown): string | undefined {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      typeof error.code === 'string' &&
      /^[A-Z][A-Z0-9_]{0,63}$/.test(error.code)
    ) {
      return error.code;
    }

    return undefined;
  }

  private logPoolSaturation(): void {
    const now = Date.now();
    if (
      this.lastPoolSaturationWarningAt !== undefined &&
      now - this.lastPoolSaturationWarningAt < 60_000
    ) {
      return;
    }
    this.lastPoolSaturationWarningAt = now;
    this.logger.warn('database_pool_waiting_for_connection');
  }
}
