import { RowDataPacket } from 'mysql2';

export interface SpDefaultFeedback extends RowDataPacket {
  sp_return_id: number;
  sp_message: string;
  sp_error_id: number;
}

// Database operation result
export interface SpOperationResult {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
}

export interface TblSellerFindManagerAll extends RowDataPacket {
  ID_CUSTOMER: number;
  ID_TIPO_CLIENTE: number;
  ID_PESSOA_TIPO: number;
  NOME: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  RAZAO_SOCIAL: string | null;
  CIDADE: string | null;
  CPF: string | null;
  CNPJ: string | null;
  TIPO_CLIENTE: string;
  TIPO_PESSOA: string;
  EMAIL: string | null;
  PATH_IMAGEM: string | null;
  ULTIMA_COMPRA: Date | null;
  DATA_CADASTRO: Date | null;
}

export type SpResultSellerFindManagerAllData = [
  TblSellerFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];
