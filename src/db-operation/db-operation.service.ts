import { Injectable, Logger } from '@nestjs/common';
import { PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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
  private readonly logger = new Logger(DbOperationService.name);

  constructor(private readonly dbConnectionService: DbConnectionService) {}

  // Método para SELECT (sem transação)
  async selectQuery<T extends RowDataPacket>(
    queryString: string,
    params?: QueryParams,
  ): Promise<T[]> {
    const [results] = await this.dbConnectionService
      .getPool()
      .query<T[]>(queryString, params);
    return results;
  }

  // Método para SELECT com segurança reforçada
  async selectExecute<T extends RowDataPacket>(
    queryString: string,
    params?: QueryParams,
  ): Promise<T[]> {
    const [results] = await this.dbConnectionService
      .getPool()
      .execute<T[]>(queryString, params);
    return results;
  }

  // Insert/Update/Delete usando execute
  async ModifyExecute(
    queryString: string,
    params?: QueryParams,
  ): Promise<ResultSetHeader> {
    const [results] = await this.dbConnectionService
      .getPool()
      .execute(queryString, params);
    return results as ResultSetHeader;
  }

  // Insert/Update/Delete usando query
  async ModifyQuery(
    queryString: string,
    params?: QueryParams,
  ): Promise<ResultSetHeader> {
    const [results] = await this.dbConnectionService
      .getPool()
      .query(queryString, params);
    return results as ResultSetHeader;
  }

  // Operações com transação
  async runInTransaction<T>(
    callback: (connection: PoolConnection) => Promise<T>,
  ): Promise<T> {
    const connection = await this.dbConnectionService.getConnection();

    try {
      await connection.beginTransaction();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      await connection.rollback();
      this.logger.error('Transação falhou. Revertida.', error);
      throw error;
    } finally {
      connection.release();
    }
  }

  // Para procedimentos armazenados que retornam múltiplos conjuntos de resultados
  async chamarProcedimento<T extends RowDataPacket>(
    nomeProcedimento: string,
    params?: SqlParam[],
  ): Promise<T[][]> {
    const query = `CALL ${nomeProcedimento}(${params ? params.map(() => '?').join(',') : ''})`;
    const [results] = await this.dbConnectionService
      .getPool()
      .execute<T[][]>(query, params);
    return results;
  }
}

export class DbQueryExecutionError extends Error {
  constructor(
    mensagem: string,
    public readonly consulta: string,
    public readonly erroOriginal: Error,
  ) {
    super(mensagem);
    this.name = 'DbQueryExecutionError';
  }
}
