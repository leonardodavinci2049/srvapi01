import { Injectable, Logger } from '@nestjs/common';
import {
  createPool,
  Pool,
  PoolConnection,
  ResultSetHeader,
  RowDataPacket,
  PoolOptions,
  // Add this import
} from 'mysql2/promise';
import { envs } from 'src/core/config/envs';

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
export class DatabaseService {
  // Property to hold the connection to MySQL database
  private poolConnection: Pool;
  // Logger instance
  private readonly logger = new Logger(DatabaseService.name);

  // Call the connect method when an instance of DatabaseService is created
  constructor() {
    this.connect();
  }

  public connect() {
    try {
      const config: PoolOptions = {
        host: envs.DATABASE_HOST,
        port: envs.DATABASE_PORT,
        database: envs.DATABASE_NAME,
        user: envs.DATABASE_USER,
        password: envs.DATABASE_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        // Remova pool: true, pois não é necessário e não faz parte de PoolOptions
      };

      this.poolConnection = createPool(config);

      this.logger.log('Conectado ao banco de dados MySQL');
    } catch (error) {
      this.logger.error(
        'Erro ao conectar ao banco de dados MySQL com mysql2',
        error,
      );
    }
  }

  // Método para SELECT (sem transação)
  async selectQuery<T extends RowDataPacket>(
    queryString: string,
    params?: QueryParams,
  ): Promise<T[]> {
    const [results] = await this.poolConnection.query<T[]>(queryString, params);
    return results;
  }
  // Método para SELECT com segurança reforçada
  async selectExecute<T extends RowDataPacket>(
    queryString: string,
    params?: QueryParams,
  ): Promise<T[]> {
    const [results] = await this.poolConnection.execute<T[]>(
      queryString,
      params,
    );
    return results;
  }

  // Insert/Update/Delete usando execute
  async ModifyExecute(
    queryString: string,
    params?: QueryParams,
  ): Promise<ResultSetHeader> {
    const [results] = await this.poolConnection.execute(queryString, params);
    return results as ResultSetHeader;
  }

  // Insert/Update/Delete usando query
  async ModifyQuery(
    queryString: string,
    params?: QueryParams,
  ): Promise<ResultSetHeader> {
    const [results] = await this.poolConnection.query(queryString, params);
    return results as ResultSetHeader;
  }

  // Operações com transação
  async runInTransaction<T>(
    callback: (connection: PoolConnection) => Promise<T>,
  ): Promise<T> {
    const connection = await this.getConnection();

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

  //🧪 Exemplo de uso com transação

  /* await this.databaseService.runInTransaction(async (conn) => {
  await conn.execute('UPDATE users SET balance = balance - ? WHERE id = ?', [100, 1]);
  await conn.execute('UPDATE users SET balance = balance + ? WHERE id = ?', [100, 2]);
});

 */

  async getConnection() {
    try {
      return await this.poolConnection.getConnection();
    } catch (error) {
      this.logger.error(`Failed to get database connection: ${error}`, error);
      throw error;
    }
  }
  // Fechamento do pool ao encerrar módulo
  // Fechamento do pool ao encerrar módulo
  async onModuleDestroy(): Promise<void> {
    await this.poolConnection.end();
    this.logger.log('MySQL connection pool closed');
  }

  // Para procedimentos armazenados que retornam múltiplos conjuntos de resultados
  async chamarProcedimento<T extends RowDataPacket>(
    nomeProcedimento: string,
    params?: SqlParam[],
  ): Promise<T[][]> {
    const query = `CALL ${nomeProcedimento}(${params ? params.map(() => '?').join(',') : ''})`;
    const [results] = await this.poolConnection.execute<T[][]>(query, params);
    return results;
  }
}

export class ErroConexaoBancoDados extends Error {
  constructor(
    mensagem: string,
    public readonly erroOriginal: Error,
  ) {
    super(mensagem);
    this.name = 'ErroConexaoBancoDados';
  }
}

export class ErroExecucaoConsulta extends Error {
  constructor(
    mensagem: string,
    public readonly consulta: string,
    public readonly erroOriginal: Error,
  ) {
    super(mensagem);
    this.name = 'ErroExecucaoConsulta';
  }
}
