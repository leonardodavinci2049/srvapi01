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

export interface TblOrderSummaryFindId extends RowDataPacket {
  ID_PEDIDO: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string | number;
  VL_FRETE?: string | number;
  VL_ACRESCIMO?: string | number;
  VL_SEGURO?: string | number;
  VL_DESCONTO?: string | number;
  VL_TOTAL_PEDIDO?: string | number;
}

export interface TblOrderItemsFindId extends RowDataPacket {
  ID_ITEM?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  SKU?: number | string;
  PRODUTO?: string | null;
  QT?: number;
  VL_UNITARIO?: string | number;
  VL_SUBTOTAL?: string | number;
  VL_ACRESCIMO?: string | number;
  VL_SEGURO?: string | number;
  VL_DESCONTO?: string | number;
  VL_FRETE?: string | number;
  VL_TOTAL?: string | number;
  STATUS?: string | null;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  DATADOCADASTRO?: Date | string | null;
}

export interface TblCustomerDetailsFindId extends RowDataPacket {
  ID_USUARIO?: number;
  ID_VENDEDOR?: number;
  CEP?: string | null;
  ENDERECO?: string | null;
  ENDERECO_NUMERO?: string | null;
  COMPLEMENTO?: string | null;
  BAIRRO?: string | null;
  CIDADE?: string | null;
  UF?: string | null;
  REGIAO_PAIS?: string | null;
  PAIS?: string | null;
  COD_MUNICIPIO?: number;
  COD_UF?: number;
}

export interface TblSellerDetailsFindId extends RowDataPacket {
  ID_VENDEDOR?: number;
  ID_LOJA?: number;
  NOME?: string | null;
  PATH_IMAGEM?: string | null;
  FONE1?: string | null;
  WHATAPP1?: string | null;
  EMAIL?: string | null;
}
export type SpResultRecordOperationType = [
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultOrderOperSendingByEmailData = [
  TblOrderSummaryFindId[],
  TblOrderItemsFindId[],
  TblCustomerDetailsFindId[],
  TblSellerDetailsFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
