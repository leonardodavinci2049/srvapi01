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

export interface TblOrderSummary extends RowDataPacket {
  ID_PEDIDO?: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_FRETE?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
}
export interface TblOrderDetails extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_LOJA?: number;
  ID_CLIENTE?: number;
  ID_VENDEDOR?: number;
  ID_PROTOCOLO?: number;
  ID_LOCALIZACAO_PED?: number;
  ID_EQUIPAMENTO?: number | null;
  ID_PG_FORMA?: number;
  ID_CARRINHO?: number;
  ID_TRANSPORTADORA?: number;
  FLAG_VENDA_ATACADO?: number;
  ID_STATUS_ENTREGA?: number;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_PEDIDO?: string;
  STATUS_FINANCEIRO?: string;
  STATUS_ENTREGA?: string;
  STATUS_ESTOQUE?: string;
  DATA_PEDIDO?: string | null;
  DATA_VENDA?: string | null;
  DATA_RETIRADA?: string | null;
  DATA_ENTREGA?: string | null;
  DATA_ESTOQUE?: string | null;
  DATADOCADASTRO?: string;
  ANOTACOES?: string;
}
export interface TblOrderItems extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  EAN?: string;
  REF?: string;
  SKU?: string | null;
  ETIQUETA?: string;
  ID_TIPO?: number;
  MODELO?: string;
  PRODUTO?: string;
  QT?: number;
  VL_UNITARIO?: string;
  VL_DESCONTO?: string;
  VL_DESCONTO_ADM?: string;

  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;

  CODIGOP?: string | null;
  PROMOCAO?: number;
  ESTOQUE_LOJA1?: number;
  DEPOSITO1?: number;
  PATH_IMAGEM?: string;
  PATH_PAGE?: string;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  VL_SUBTOTAL?: string;
  VL_DESCONTO_TOTAL?: string;
  VL_TOTAL?: string;
  DATADOCADASTRO?: Date;
  ANOTACOES?: string;
}

export interface TblCustomerDetails extends RowDataPacket {
  ID_CLIENTE?: number;
  NOME_CLIENTE?: string;
  PATH_IMAGEM?: string;
  DATADOCADASTRO?: Date;
  DT_ULTIMA_COMPRA?: Date;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL?: string;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number;
  ACCOUNT_STATUS?: string;
  CPF?: string;
  RG?: string;
  RAZAO_SOCIAL?: string;
  NOME_FANTASIA?: string;
  CNPJ?: string;
  INSC_ESTADUAL?: string;
  INSC_MUNICIPAL?: string;
  CEP?: string;
  ENDERECO?: string;
  ENDERECO_NUMERO?: string;
  COMPLEMENTO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  PAIS?: string;
  COD_MUNICIPIO?: number;
  COD_UF?: number;
  ANOTACOES?: string;
}

export interface TblSellerDetails extends RowDataPacket {
  ID_VENDEDOR?: number;
  NOME_VENDEDOR?: string;
  IMAGEM_VENDEDOR?: string;

  TELEFONE_VENDEDOR?: string;
  WHATSAPP_VENDEDOR?: string;
  EMAIL_VENDEDOR?: string;
}

export interface TblQtItems extends RowDataPacket {
  QT_ITEMS?: number;
}

export interface TblOrdersFindLatestV2 extends RowDataPacket {
  DATA_PEDIDO?: string | null;
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  CLIENTE?: string;

  ID_STATUS_PEDIDO?: number;
  ID_STATUS_FINANCEIRO?: number;
  ID_STATUS_ENTREGA?: number;

  STATUS_PEDIDO?: string;
  STATUS_FINANCEIRO?: string;
  STATUS_ENTREGA?: string;

  QT_ITENS?: number;
  VL_FRETE?: number;
  VL_DESCONTO?: number;
  VL_TOTAL?: number;
}

export interface TblOrdersStatisticsCustomerV2 extends RowDataPacket {
  ID_CLIENTE?: number;
  CLIENTE?: string;
  QT_PEDIDOS?: string;
  QT_ITENS?: number;
  TICKET_MEDIO?: number;
  TOTAL_GERAL?: number;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type ResultOrderFindBudgetCustomerIdV2Data = [
  TblOrderSummary[],
  TblOrderDetails[],
  TblOrderItems[],
  TblCustomerDetails[],
  TblSellerDetails[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type ResultOrderFindDashboardCustomerIdV2Data = [
  TblOrderSummary[],
  TblOrderDetails[],
  TblOrderItems[],
  TblCustomerDetails[],
  TblSellerDetails[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type ResultOrderItemFindQtV2Data = [
  TblQtItems[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type ResultOrdersFindLatestV2Data = [
  TblOrdersFindLatestV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type ResultOrdersStatisticsCustomerV2Data = [
  TblOrdersStatisticsCustomerV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];
