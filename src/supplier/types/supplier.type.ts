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

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export interface TblSupplierFindALL extends RowDataPacket {
  ID_FORNECEDOR: number;
  FORNECEDOR: string;
}

export interface TblSupplierFindManagerAll extends RowDataPacket {
  ID_FORNECEDOR: number;
  FORNECEDOR: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  RAZAO_SOCIAL: string | null;
  CPF: string | null;
  CNPJ: string | null;
  EMAIL: string | null;
  ID_IMAGEM: number | null;
  ULTIMA_COMPRA: Date | null;
  UF: string | null;
  CIDADE: string | null;
  DATA_CADASTRO: Date | null;
}

export interface TblSupplierFindSearch extends RowDataPacket {
  ID_FORNECEDOR: number;
  FORNECEDOR: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  RAZAO_SOCIAL: string | null;
  CPF: string | null;
  CNPJ: string | null;
  EMAIL: string | null;
  ID_IMAGEM: number | null;
  ULTIMA_COMPRA: Date | null;
  UF: string | null;
  CIDADE: string | null;
  DATA_CADASTRO: Date | null;
}

export type SpResultSupplierFindSearchData = TblSupplierFindSearch[];

export type SpResultSupplierFindManagerAllData = [
  TblSupplierFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultSupplierFindAllData = [
  TblSupplierFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultSupplierFindIdData = [
  TblSupplierFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];
