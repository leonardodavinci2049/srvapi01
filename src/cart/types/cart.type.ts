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

export interface TblCartFindIdV1 extends RowDataPacket {
  ID_CARRINHO?: number;
  SESSION_CART_ID?: string | null;
  TYPE_BUSINESS?: number | null;
  PUBLIC_CODE?: string | null;
  CEP?: string | null;
  CUSTUMER_NAME?: string | null;
  ID_STATUS?: number | null;
  STATUS_CART?: string | null;
  TIPO_FRETE?: string | null;
  TIPO?: string | null;
  PG_FORMA_ID?: number | null;
  PG_FORMA?: string | null;
  VL_FRETE?: string | null;
  PRECO_TIPO?: string;
  VL_DESCONTO?: string | null;
  CREATEDAT?: string | null;
}

export interface TblCartItemFindIdV1 extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_CARRINHO?: number | null;
  SESSION_CART_ID?: string | null;
  ID_PRODUTO?: number | null;
  SKU?: number | null;
  PRODUTO?: string | null;
  QT?: number | null;
  ESTOQUE?: number | null;
  VL_UNITARIO?: string | null;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
}

export interface TblCartItemFindSessionV1 extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_CARRINHO?: number | null;
  SESSION_CART_ID?: string | null;
  ID_PRODUTO?: number | null;
  SKU?: number | null;
  PRODUTO?: string | null;
  QT?: number | null;
  ESTOQUE?: number | null;
  VL_UNITARIO?: string | null;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
}

export interface TblCartFindQtV1 extends RowDataPacket {
  QT_ITEMS: number;
}

export interface TblCartFindAllV1 extends RowDataPacket {
  ID_CARRINHO?: number;
  SESSION_CART_ID?: string | null;
  TYPE_BUSINESS?: number | null;
  PUBLIC_CODE?: string | null;
  CEP?: string | null;
  CUSTUMER_NAME?: string | null;
  ID_STATUS?: number | null;
  STATUS_CART?: string | null;
  TIPO_FRETE?: string | null;
  TIPO?: string | null;
  PG_FORMA_ID?: number | null;
  PG_FORMA?: string | null;
  VL_FRETE?: string | null;
  PRECO_TIPO?: string;
  VL_DESCONTO?: string | null;
  CREATEDAT?: string | null;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultCartFindIdData = [
  TblCartFindIdV1[],
  TblCartItemFindIdV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCartFindSessionData = [
  TblCartFindIdV1[],
  TblCartItemFindSessionV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCartFindQtData = [
  TblCartFindQtV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCartFindAllData = [
  TblCartFindAllV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];
