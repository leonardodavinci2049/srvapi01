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

export interface tbltaxonomyWebRelated extends RowDataPacket {
  ID_TAXONOMY?: number;
  PARENT_ID?: number;
  TAXONOMIA?: string | null;
  SLUG?: string | null;
  ORDEM?: number;
  LEVEL?: number;
}

export interface tblPhysicalProductFindAllV2 extends RowDataPacket {
  ID_FISICO?: number;
  ID_LOJA?: number;
  ID_PRODUTO?: number | null;
  PRODUTO?: string | null;
  TEMPODEGARANTIA_MES?: number;
  IMPORTADO?: number;
  ETIQUETA?: string | null;
  N_SERIE?: string | null;
  COD_BARRAS?: string | null;
  TAMANHO?: string | null;
  DESCRICAO?: string | null;
  FORNECEDOR?: string | null;
  FRETADOR?: string | null;
  ID_EMPRESA?: number | null;
  ID_ENTRADA?: number | null;
  ID_ENTRADA_MOVIMENTO?: number | null;
  DATA_ULT_ENTRADA?: Date | null;
  DT_ENTRADA?: Date | null;
  NF_ENTRADA?: string | null;
  VL_CUSTO?: number | null;
  DATA_PEDIDO?: Date | null;
  ID_PEDIDO?: number | null;
  ID_PEDIDO_MOVIMENTO?: number;
  ID_STATUS?: number;
  ID_CLIENTE?: number | null;
  CLIENTE?: string | null;
  id_tipo_cliente?: number | null;
  VL_VENDA?: number | null;
  VENDEDOR?: string | null;
  ESTOQUE?: number;
  ID_LOCALIZACAO?: number | null;
  LOCATION?: string | null;
  DT_RETIRADA?: Date | null;
  HORA?: string | null;
  DATA?: Date | null;
  NF_SAIDA?: string | null;
  ID_STATUSRMA?: number;
  GARANTIA?: Date | null;
  HISTORICO?: string | null;
  DT_CADASTRO?: Date | null;
}

export interface tblOrderItemFindAllCustomerV2 extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_PEDIDO?: number;
  DATA_PEDIDO?: Date | null;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_PRODUTO?: number;
  DESCRICAO?: string | null;
  QT?: number;
  VL_UNITARIO?: number;
  MODELO?: string | null;
  REF?: string | null;
  ETIQUETA?: string | null;
  ID_TIPO?: number;
  TIPO?: string | null;
  ID_MARCA?: number | null;
  MARCA?: string | null;
  PATH_IMAGEM?: string | null;
  PATH_PAGE?: string | null;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  VL_DESCONTO_ADM?: number;
  VL_DESCONTO?: number;
  VL_DESCONTO_TOTAL?: number;
  VL_SUBTOTAL?: number;
  VL_TOTAL?: number;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string | null;
  ID_CLIENTE?: number;
  CLIENTE?: string | null;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number | null;
  ACCOUNT_STATUS?: string;
  VENDEDOR?: string | null;
  DATADOCADASTRO?: Date | null;
}

export interface tblOrderItemFindIdCustomerV2 extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_PEDIDO?: number;
  DATA_PEDIDO?: Date | null;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_PRODUTO?: number;
  DESCRICAO?: string | null;
  QT?: number;
  VL_UNITARIO?: number;
  MODELO?: string | null;
  REF?: string | null;
  ETIQUETA?: string | null;
  ID_TIPO?: number;
  TIPO?: string | null;
  ID_MARCA?: number | null;
  MARCA?: string | null;
  PATH_IMAGEM?: string | null;
  PATH_PAGE?: string | null;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  VL_DESCONTO_ADM?: number;
  VL_DESCONTO?: number;
  VL_DESCONTO_TOTAL?: number;
  VL_SUBTOTAL?: number;
  VL_TOTAL?: number;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string | null;
  ID_CLIENTE?: number;
  CLIENTE?: string | null;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number | null;
  ACCOUNT_STATUS?: string;
  VENDEDOR?: string | null;
  DATADOCADASTRO?: Date | null;
}

export interface tblPhysicalProductWarrantyMovCustomerV2 extends RowDataPacket {
  GARANTIA_ID?: number;
  PRODUTO?: string | null;
  ID_TIPO?: number;
  TIPO?: string | null;
  ID_MARCA?: number | null;
  MARCA?: string | null;
  TEMPODEGARANTIA_DIA?: number;
  ETIQUETA?: string | null;
  N_SERIE?: string | null;
  COD_BARRAS?: string | null;
  LOCATION?: string | null;
  DATA_PEDIDO?: Date | null;
  ID_PEDIDO?: number | null;
  ID_MOVIMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string | null;
  ID_CLIENTE?: number;
  CLIENTE?: string | null;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number | null;
  ACCOUNT_STATUS?: string;
  VENDEDOR?: string | null;
  VL_VENDA?: number | null;
  DT_RETIRADA?: Date | null;
  GARANTIA_LIMITE?: Date | null;
  STATUS_GARANTIA?: string;
}

export interface tblPhysicalProductWarrantyIdCustomerV2 extends RowDataPacket {
  GARANTIA_ID?: number;
  PRODUTO?: string | null;
  ID_TIPO?: number;
  TIPO?: string | null;
  ID_MARCA?: number | null;
  MARCA?: string | null;
  TEMPODEGARANTIA_DIA?: number;
  ETIQUETA?: string | null;
  N_SERIE?: string | null;
  COD_BARRAS?: string | null;
  LOCATION?: string | null;
  DATA_PEDIDO?: Date | null;
  ID_PEDIDO?: number | null;
  ID_MOVIMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string | null;
  ID_CLIENTE?: number;
  CLIENTE?: string | null;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number | null;
  ACCOUNT_STATUS?: string;
  VENDEDOR?: string | null;
  VL_VENDA?: number | null;
  DT_RETIRADA?: Date | null;
  GARANTIA_LIMITE?: Date | null;
  STATUS_GARANTIA?: string;
}

export interface tblPhysicalProductWarrantyIdV2 extends RowDataPacket {
  GARANTIA_ID?: number;
  PRODUTO?: string | null;
  ID_TIPO?: number;
  TIPO?: string | null;
  ID_MARCA?: number | null;
  MARCA?: string | null;
  TEMPODEGARANTIA_DIA?: number;
  ETIQUETA?: string | null;
  N_SERIE?: string | null;
  COD_BARRAS?: string | null;
  LOCATION?: string | null;
  DATA_PEDIDO?: Date | null;
  ID_PEDIDO?: number | null;
  ID_MOVIMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string | null;
  ID_CLIENTE?: number;
  CLIENTE?: string | null;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number | null;
  ACCOUNT_STATUS?: string;
  VENDEDOR?: string | null;
  VL_VENDA?: number | null;
  DT_RETIRADA?: Date | null;
  GARANTIA_LIMITE?: Date | null;
  STATUS_GARANTIA?: string;
}

export interface tblPhysicalProductWarrantyMovV2 extends RowDataPacket {
  GARANTIA_ID?: number;
  PRODUTO?: string | null;
  ID_TIPO?: number;
  TIPO?: string | null;
  ID_MARCA?: number | null;
  MARCA?: string | null;
  TEMPODEGARANTIA_DIA?: number;
  ETIQUETA?: string | null;
  N_SERIE?: string | null;
  COD_BARRAS?: string | null;
  LOCATION?: string | null;
  DATA_PEDIDO?: Date | null;
  ID_PEDIDO?: number | null;
  ID_MOVIMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string | null;
  ID_CLIENTE?: number;
  CLIENTE?: string | null;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number | null;
  ACCOUNT_STATUS?: string;
  VENDEDOR?: string | null;
  VL_VENDA?: number | null;
  DT_RETIRADA?: Date | null;
  GARANTIA_LIMITE?: Date | null;
  STATUS_GARANTIA?: string;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];


export type SpOrderItemFindAllCustomerV2DataType = [
  tblOrderItemFindAllCustomerV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpOrderItemFindIdCustomerV2DataType = [
  tblOrderItemFindIdCustomerV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];


export type SpPhysicalProductFindAllV2DataType = [
  tblPhysicalProductFindAllV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];




export type SpPhysicalProductWarrantyMovCustomerV2DataType = [
  tblPhysicalProductWarrantyMovCustomerV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpPhysicalProductWarrantyIdCustomerV2DataType = [
  tblPhysicalProductWarrantyIdCustomerV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpPhysicalProductWarrantyIdV2DataType = [
  tblPhysicalProductWarrantyIdV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpPhysicalProductWarrantyMovV2DataType = [
  tblPhysicalProductWarrantyMovV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];
