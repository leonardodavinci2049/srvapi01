import { RowDataPacket } from 'mysql2';

export interface SpDefaultFeedback extends RowDataPacket {
  pl_id_cadastro: number;
  pl_feedback: string;
  pl_id_erro: number;
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

export interface tblAccountConfigRecords extends RowDataPacket {
  ID_CLIENTE: number;
  ID_LOJA?: number;
  NOME?: string;
  PATH_IMAGEM?: string;
  EMAIL_DE_LOGIN?: string;
  ID_THEMA?: number;
  EMAIL_NOTIFICATIONS?: number;
  SMS_NOTIFICATIONS?: number;
  WHATSAPP_NOTIFICATIONS?: number;
  PUSH_NOTIFICATIONS?: number;
  DATADOCADASTRO?: Date;
}

export interface tblStatisticsRecords extends RowDataPacket {
  ID_CLIENTE?: number;
  CLIENTE?: string;
  QT_PEDIDOS: number;
  QT_ITENS?: number;
  TICKET_MEDIO?: number;
  TOTAL_GERAL_PEDIDO?: number;
}

export interface tblOrdersLatestRecords extends RowDataPacket {
  DATADOCADASTRO?: Date;
  ID_PEDIDO?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_ENTREGA?: number;
  STATUS_ENTREGA?: string;
  ID_CLIENTE?: number;
  NOME?: string;
  QT_ITENS?: number;
  TOTAL_PEDIDO?: number;
}

export interface tblPessoaSummaryRecords extends RowDataPacket {
  ID_USUARIO?: number;
  ID_LOJA?: number;

  ID_PESSOA_TIPO?: number;
  ID_TIPO_CLIENTE?: number;

  ACCOUNT_STATUS?: string;
  NOME?: string;
  RAZAO_SOCIAL?: string;
  PATH_IMAGEM?: string;

  FONE1?: string;
  WHATAPP1?: string;
  EMAIL?: string;
}

export interface tblVendedorSummaryRecords extends RowDataPacket {
  ID_VENDEDOR?: number;
  ID_LOJA?: number;
  NOME?: string;
  PATH_IMAGEM?: string;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL?: string;
}

export interface tblPessoaProfileRecords extends RowDataPacket {
  //  GERAL --
  ID_CLIENTE?: number;
  ID_LOJA?: number;
  ID_TIPO_CLIENTE?: number;

  ACCOUNT_STATUS?: string;
  NOME?: string;
  EMAIL?: string;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL_DE_LOGIN?: string;
  //  PESSOA TIPO  -
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  //  PESSOA FISICA  //
  CPF?: string;
  PRIMEIRO_NOME?: string;
  SOBRENOME?: string;
  PATH_IMAGEM?: string;
  DATADONASCIMENTO?: string;
  //  PESSOA JURIDICA  --
  CNPJ?: string;
  RAZAO_SOCIAL?: string;
  NOME_FANTASIA?: string;
  INSC_ESTADUAL?: string;
  INSC_MUNICIPAL?: string;
  NOME_RESPONSAVEL?: string;
  CARGO_RESPONSAVEL?: string;
  ATIVIDADE_PRINCIPAL?: string;
  //  VENDEDOR  --
  ID_VENDEDOR?: number;
  //  ENEREÇO  --
  CEP?: string;
  ENDERECO?: string;
  ENDERECO_NUMERO?: string;
  COMPLEMENTO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  REGIAO_PAIS?: string;
  PAIS?: string;
  COD_MUNICIPIO?: number;
  COD_UF?: number;
  //  INTERNET --
  WEBSITE?: string;
  FACEBOOK?: string;
  TWITTER?: string;
  LINKEDIN?: string;
  INSTAGRAM?: string;
  TIKTOK?: string;
  TELEGRAM?: string;
  //  DIVERSOS --
  VENDEDOR?: number;
  DATADOCADASTRO?: Date;
}

export interface tblOrderslistRecords extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_ENTREGA?: number;
  STATUS_ENTREGA?: string;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string;
  QT_ITENS?: number;
  TOTAL_PEDIDO?: number;
  DATA_ORCAMENTO?: Date;
  DATA_PEDIDO?: Date;
  DATA_ENTREGA?: Date;
}

export interface tblOrderDetailsRecords extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  ID_STATUS_PEDIDO?: number;
  STATUS_PEDIDO?: string;
  ID_STATUS_ENTREGA?: number;
  STATUS_ENTREGA?: string;
  ID_STATUS_FINANCEIRO?: number;
  STATUS_FINANCEIRO?: string;
  QT_ITENS?: number;

  TOTAL_PEDIDO?: number;
  DATA_ORCAMENTO?: Date;
  DATA_PEDIDO?: Date;
  DATA_ENTREGA?: Date;
}

export interface tblOrderItemsRecords extends RowDataPacket {
  ID_ITEM?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  SKU?: number;
  PRODUTO?: string;
  QT?: number;
  VL_UNITARIO?: number;
  VL_SUBTOTAL?: number;
  VL_ACRESCIMO?: number;
  VL_SEGURO?: number;
  VL_DESCONTO?: number;
  VL_FRETE?: number;
  VL_TOTAL?: number;
  STATUS?: string;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  DATADOCADASTRO?: Date;
}

export interface tblOrderAmountsRecords extends RowDataPacket {
  ID_PEDIDO?: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: number;
  VL_ACRESCIMO?: number;
  VL_SEGURO?: number;
  VL_DESCONTO?: number;
  VL_FRETE?: number;
  VL_TOTAL_PEDIDO?: number;
}

export interface tblOrderHistoryRecords extends RowDataPacket {
  ID_PEDIDO?: number;
  DATA_ORCAMENTO?: Date;
  DATA_PEDIDO?: Date;
  DATA_VENDA?: Date;
  DATA_PAGAMENTO?: Date;
  DATA_ENTREGA?: Date;
  DATA_ESTORNO?: Date;
}

export interface tblShippingAddressRecords extends RowDataPacket {
  ID_USUARIO?: number;
  ID_VENDEDOR?: number;
  CEP?: string;
  ENDERECO?: string;
  ENDERECO_NUMERO?: string;
  COMPLEMENTO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  REGIAO_PAIS?: string;
  PAIS?: string;
  COD_MUNICIPIO?: number;
  COD_UF?: number;
}

export interface tblSalesConsultantRecords extends RowDataPacket {
  ID_VENDEDOR?: number;
  ID_LOJA?: number;
  NOME?: string;
  PATH_IMAGEM?: string;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL?: string;
}

export interface tblProductsPromotionRecords extends RowDataPacket {
  ID_PRODUTO?: number;
  ID_POST?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  SKU?: number;
  ID_TIPO?: number;
  TIPO?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  ESTOQUE_LOJA?: number;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  DECONTO?: number;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  DESCRICAO_VENDA?: string;
  ID_MARCA?: number;
  MARCA_NOME?: string;
  ID_IMAGEM_MARCA?: number;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;
  DATADOCADASTRO?: Date;
}

export interface tblAccountServicesRecords extends RowDataPacket {
  ID_SERVICE?: number;
  ID_POST?: number;
  SERVICE?: string;
  ID_TIPO?: number;
  TIPO?: number;
  PROMOCAO?: number;
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  DECONTO?: number;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;
  DATADOCADASTRO?: Date;
}

export interface tblAccountConfigRecords extends RowDataPacket {
  ID_USUARIO?: number;
  ID_LOJA?: number;
  NOME?: string;
  PATH_IMAGEM?: string;
  EMAIL_DE_LOGIN?: string;
  ID_THEMA?: number;
  EMAIL_NOTIFICATIONS?: number;
  SMS_NOTIFICATIONS?: number;
  WHATSAPP_NOTIFICATIONS?: number;
  PUSH_NOTIFICATIONS?: number;
  DATADOCADASTRO?: Date;
}

export type SpResultAccountStatisticsType = [
  tblStatisticsRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountOrdersLatestType = [
  tblOrdersLatestRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountSummaryType = [
  tblPessoaSummaryRecords[],
  tblVendedorSummaryRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountProfileType = [
  tblPessoaProfileRecords[],
  tblVendedorSummaryRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountOrdersListType = [
  tblOrderslistRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountOrdersSummaryType = [
  tblOrderDetailsRecords[],
  tblOrderItemsRecords[],
  tblOrderAmountsRecords[],
  tblOrderHistoryRecords[],
  tblShippingAddressRecords[],
  tblSalesConsultantRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountProductsPromotionType = [
  tblProductsPromotionRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountServicesType = [
  tblAccountServicesRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountConfigType = [
  tblAccountConfigRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountGeneralUpdType = [
  tblPessoaProfileRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountTypeUpdType = [
  tblPessoaProfileRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountBusinessUpdType = [
  tblPessoaProfileRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountPersonalUpdType = [
  tblPessoaProfileRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountAddressUpdType = [
  tblPessoaProfileRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountInternetUpdType = [
  tblPessoaProfileRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountThemeUpdType = [
  tblAccountConfigRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountNotificationUpdType = [
  tblAccountConfigRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountEmailUpdType = [
  tblAccountConfigRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAccountPasswordUpdType = [
  tblAccountConfigRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];
