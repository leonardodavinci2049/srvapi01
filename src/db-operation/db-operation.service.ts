import { Injectable, Logger } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { writeLocalLog } from 'src/core/utils/functions/write_local_log';
import { DatabasePoolQueueFullError } from 'src/db-connection/db-connection.errors';
import { DbConnectionService } from 'src/db-connection/db-connection.service';

// Tipos compatíveis com mysql2 v3.18+
type SqlParam =
  | string
  | number
  | bigint
  | boolean
  | Date
  | null
  | Buffer
  | Uint8Array;
type QueryParams = SqlParam[] | { [key: string]: SqlParam };

@Injectable()
export class DbOperationService {
  /** Logs failed operations without SQL, parameters, or driver messages. */
  private readonly logger = new Logger(DbOperationService.name);

  constructor(private readonly dbConnectionService: DbConnectionService) {}

  /**
   * Runs a read query through mysql2's `query` API.
   * Build optional SQL clauses from trusted code and pass values through placeholders.
   * Choose dynamic identifiers and sort directions from an explicit allowlist.
   */
  async selectQuery<T extends RowDataPacket>(
    queryString: string,
    params?: QueryParams,
  ): Promise<T[]> {
    const [results] = await this.trackOperation('selectQuery', () =>
      this.dbConnectionService.withConnection((executor) =>
        executor.query<T[]>(queryString, params),
      ),
    );
    return results;
  }

  // Método para SELECT com segurança reforçada
  async selectExecute<T extends RowDataPacket>(
    queryString: string,
    params?: QueryParams,
  ): Promise<T[]> {
    return this.dbConnectionService.withConnection(async (connection) => {
      const [results] = await connection.execute<T[]>(queryString, params);
      return results;
    });
  }

  // Insert/Update/Delete usando execute
  async ModifyExecute(
    queryString: string,
    params?: QueryParams,
  ): Promise<ResultSetHeader> {
    return this.dbConnectionService.withConnection(async (connection) => {
      const [results] = await connection.execute(queryString, params);
      return results as ResultSetHeader;
    });
  }

  /** Includes pool wait and cleanup; successful operations remain silent. */
  private async trackOperation<T>(
    operation: string,
    callback: () => Promise<T>,
  ): Promise<T> {
    const startedAt = performance.now();
    try {
      return await callback();
    } catch (error: unknown) {
      const diagnostic = {
        event: 'database_operation_failed',
        operation,
        reason:
          error instanceof DatabasePoolQueueFullError
            ? 'pool_queue_full'
            : 'operation_failed',
        durationMs: Math.round(performance.now() - startedAt),
      };
      this.logger.error(diagnostic);
      await writeLocalLog(DbOperationService.name, diagnostic, 'error');
      throw error;
    }
  }
}
