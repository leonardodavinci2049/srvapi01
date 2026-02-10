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
  DATA_PEDIDO?: string | null;
  DATA_VENDA?: string | null;
  DATA_RETIRADA?: string | null;
  DATA_ENTREGA?: string | null;
  DATADOCADASTRO?: string;
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
}

export interface TblOrderFindCoCarrierId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_TRANSPORTADORA?: number;
  NOME?: string;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL1?: string;
  CNPJ?: string;
  INSC_ESTADUAL?: string;
  ENDERECO?: string;
  ENDERECO_NUMERO?: string;
  CIDADE?: string;
  UF?: string;
}

export interface TblOrderFindCoCustomerId extends RowDataPacket {
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
}

export interface TblOrderFindCoDeliveryId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ID_TIPO_ENTREGA?: number | null;
  USUARIO_ENTREGA?: string | null;
  PRIORIDADE?: string | null;
  ID_TIPO_FRETE?: number;
  ID_FORMATO_ENVIO?: number;
  TIPO_FRETE?: string;
  PRAZO_ENTREGA_DIA?: number;
  QT_VOLUME?: number;
  CODIGO_CORREIOS?: string;
  VL_FRETE?: string;
  PESO_FRETE_GR?: number | null;
  ALTURA_VOLUME?: number;
  LARGURA_VOLUME?: number;
  COMPRIMENTO_VOLUME?: number;
  DATA_ORCAMENTO?: string;
  DATA_PEDIDO?: string | null;
  DATA_RETIRADA?: string | null;
  DATA_ENTREGA?: string | null;
  DATADOCADASTRO?: Date;
  ANOTACOES?: string;
}

export interface TblOrderFindEquipmentId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ENTRADA?: string;
  DEFEITO?: string;
  LAUDO?: string;
  ANOTACOES?: string;
  DATADOCADASTRO?: Date;
}

export interface TblOrderFindCoHistoryId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ID_STATUS_ORCAMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_ENTREGA?: number;
  ID_STATUS_ESTOQUE?: number;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_PEDIDO?: string;
  STATUS_FINANCEIRO?: string;
  STATUS_ENTREGA?: string;
  DATA_ORCAMENTO?: string;
  DATA_PEDIDO?: string;
  DATA_VENDA?: string;
  DATA_LIBERACAO?: string;
  DATA_RETIRADA?: string | null;
  DATA_PAGAMENTO?: string | null;
  DATA_ESTOQUE?: string;
  DATA_ESTORNO?: string | null;
  DATA_ENTREGA?: string | null;
  DATA?: string;
  HORA?: string;
  DATA_VALIDADE_ORC?: string;
  DATADOCADASTRO?: string;
}

export interface TblOrderFindCoNfId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  NFE_CHAVE?: string | null;
  NFE_LOTE?: string | null;
  NFE_NUMERO?: string | null;
  NFE_OPERACAO?: string | null;
  NFE_CHAVE_DEVOLUCAO?: string | null;
  NFSE?: string | null;
  INFO_NOTAFISCAL?: string | null;
  ANOTACOES?: string;
  DATADOCADASTRO?: string;
}

export interface TblOrderFindCoPgFormaId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ID_PG_FORMA?: number;
  PG_FORMA?: string;
  QT_PARCELA?: number;
  VL_FATOR?: string;
  TX_PG_FINANCEIRA?: string;
  TX_PG_DESCONTO?: string;
  CODIGOP?: string;
  TX_DESCONTO_CODP?: string;
  VL_DESCONTO?: string;
}

export interface TblOrderFindCoSellerId extends RowDataPacket {
  ID_VENDEDOR?: number;
  NOME_VENDEDOR?: string;
  IMAGEM_VENDEDOR?: string;
  TELEFONE_VENDEDOR?: string;
  WHATSAPP_VENDEDOR?: string;
  EMAIL_VENDEDOR?: string;
}

export interface TblOrderFindProtocolId extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ID_PROTOCOLO?: number;
  DATA_RETIRADA_PROT?: string;
  ID_USUARIO_RETIRADA?: number;
  USUARIO_RETIRADA?: string;
}

export interface TblOrderFindCoSummaryId extends RowDataPacket {
  ID_PEDIDO?: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_FRETE?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultOrderFindDashboardIdData = [
  TblOrderSummary[],
  TblOrderDetails[],
  TblOrderItems[],
  TblCustomerDetails[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindCoCarrierIdData = [
  TblOrderFindCoCarrierId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderFindCoCustomerIdData = [
  TblOrderFindCoCustomerId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderFindCoDeliveryIdData = [
  TblOrderFindCoDeliveryId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindEquipmentIdData = [
  TblOrderFindEquipmentId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderFindCoHistoryIdData = [
  TblOrderFindCoHistoryId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderFindCoNfIdData = [
  TblOrderFindCoNfId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindCoPgFormaIdData = [
  TblOrderFindCoPgFormaId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderFindProtocolIdData = [
  TblOrderFindProtocolId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderFindCoSellerIdData = [
  TblOrderFindCoSellerId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindCoSummaryIdData = [
  TblOrderFindCoSummaryId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
