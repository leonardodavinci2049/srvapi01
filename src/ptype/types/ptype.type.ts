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

export interface TblPTypeFindALL extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export interface TblPTypeFindManagerAll extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
  PATH_IMAGEM?: string | null;
}

export interface TblPTypeFindSearch extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
  PATH_IMAGEM?: string | null;
}

export interface TblPTypeFindManagerId extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string | null;
  SLUG: string | null;
  PATH_IMAGEM?: string | null;
  INATIVO: number | null;
  ANOTACOES: string | null;
  FLAG_CADASTRO_PRODUTO: number | null;
  TX_COMISSAO_VARE: string | null;
  TX_COMISSAO_ATAC: string | null;
  DT_UPDATE: Date | null;
  DT_CADASTRO: Date | null;
}

export type SpResultPTypeFindSearchData = TblPTypeFindSearch[];

export type SpResultPTypeFindManagerIdData = TblPTypeFindManagerId[];

export type SpResultPTypeFindAllData = [
  TblPTypeFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultPTypeFindManagerAllData = [
  TblPTypeFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultPTypeFindIdData = [
  TblPTypeFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];
