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
export type SpResultRecordOperationType = [
  SpDefaultFeedback[],
  SpOperationResult,
];

export interface TblEntryFindAll extends RowDataPacket {
  ID_ENTRADA: number;
  ID_USUARIO: number;
  USUARIO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  PATH_IMAGEM: string | null;
  ID_TRANSPORTADORA: number | null;
  TRANSPORTADORA: string | null;
  NUMERODANOTA: string | null;
  MODELO: string | null;
  DESCRICAO: string | null;
  CAMBIO: string | null;
  VL_FRETE: string | null;
  TX_FRETE: string | null;
  VL_TOTAL_NOTA: string | null;
  VL_TOTAL_PRODUTO: string | null;
  IPI: string | null;
  ICMS: string | null;
  VL_ICMS: string | null;
  VL_IPI: string | null;
  VL_PIS: string | null;
  VL_CONFINS: string | null;
  VL_IBS: string | null;
  VL_CBS: string | null;
  QT_MOVIMENTO: number;
  VL_TOTAL_REAL: string;
  VL_TOTAL_DOLAR: string;
  ESTOQUE: number | null;
  STATUS_ESTOQUE: string;
  FISICO: number | null;
  STATUS_FISICO: string;
  ETIQUETA: number | null;
  STATUS_ETIQUETA: string;
  DT_ENTRADA: Date | string | null;
}

export interface TblEntryFindId extends RowDataPacket {
  ID_ENTRADA: number;
  ID_USUARIO: number;
  USUARIO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  PATH_IMAGEM: string | null;
  ID_TRANSPORTADORA: number | null;
  TRANSPORTADORA: string | null;
  NUMERODANOTA: string | null;
  MODELO: string | null;
  DESCRICAO: string | null;
  CAMBIO: string | null;
  VL_FRETE: string | null;
  TX_FRETE: string | null;
  VL_TOTAL_NOTA: string | null;
  VL_TOTAL_PRODUTO: string | null;
  IPI: string | null;
  ICMS: string | null;
  VL_ICMS: string | null;
  VL_IPI: string | null;
  VL_PIS: string | null;
  VL_CONFINS: string | null;
  VL_IBS: string | null;
  VL_CBS: string | null;
  ESTOQUE: number | null;
  STATUS_ESTOQUE: string;
  FISICO: number | null;
  STATUS_FISICO: string;
  ETIQUETA: number | null;
  STATUS_ETIQUETA: string;
  ANOTACOES: string | null;
  DATA_ENTRADA_ESTOQUE: Date | string | null;
  HORA_ENTRADA_ESTOQUE: string | null;
  HR_LANCAMENTO: string | null;
  DT_LANCAMENTO: Date | string | null;
  DT_ENTRADA: Date | string | null;
  DT_UPDATE: Date | string | null;
}

export interface TblEntrySummary extends RowDataPacket {
  ID_ENTRADA: number;
  QT_MOVIMENTO: number;
  VL_TOTAL_REAL: string;
  VL_TOTAL_DOLAR: string;
}

export interface TblEntryFindSearch extends RowDataPacket {
  ID_ENTRADA: number;
  ID_FORNECEDOR: number | null;
  USUARIO: string;
  FORNECEDOR: string | null;
  TRANSPORTADORA: string | null;
  NUMERODANOTA: string | null;
  MODELO: string | null;
  ID_FRETE: number | null;
  ID_TIPO: number | null;
  ID_FRETADOR: number | null;
  DESCRICAO: string | null;
  CAMBIO: string | null;
  VL_TOTAL_NOTA: string | null;
  VL_FRETE: string | null;
  VL_TOTAL_PRODUTO: string | null;
  IPI: string | null;
  ICMS: string | null;
  ESTOQUE: number | null;
  FISICO: number | null;
  ETIQUETA: number | null;
  TX_FRETE: string | null;
  DATA_ENTRADA_ESTOQUE: Date | string | null;
  HORA_ENTRADA_ESTOQUE: string | null;
  HR_LANCAMENTO: string | null;
  DT_LANCAMENTO: Date | string | null;
  DATADOCADASTRO: Date | string | null;
  DT_UPDATE: Date | string | null;
}

export type SpResultEntryFindAllData = [
  TblEntryFindAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultEntryFindIdData = [
  TblEntryFindId[],
  TblEntrySummary[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultEntryFindSearchData = [
  TblEntryFindSearch[],
  SpDefaultFeedback[],
  SpOperationResult,
];
