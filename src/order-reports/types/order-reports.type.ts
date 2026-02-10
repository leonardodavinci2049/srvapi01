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
  VL_SEGURO?: string;
  VL_ACRESCIMO?: string;
  VL_FRETE?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
  VL_TOTAL_BASE_COMISSAO?: string;
  TX_MEDIA_COMISSAO_ATACADO?: string;
  TX_MEDIA_COMISSAO_VAREJO?: string;
  VL_COMISSAO_VENDEDOR?: string;
}

export interface TblOrderItems extends RowDataPacket {
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  CLIENTE_NOME?: string;
  ID_VENDEDOR?: number;
  VENDEDOR_NOME?: string;
  TAXA_TIPO?: string;
  ID_PG_FORMA?: number;
  PG_FORMA?: string;
  LOCALIZACAO?: string;
  ID_EQUIPAMENTO?: number | null;
  USUARIO_ENTREGA?: string | null;
  QT_PARCELA?: number;
  VL_FATOR?: string;
  TX_PG_FINANCEIRA?: string;
  TX_PG_DESCONTO?: string;
  CODIGOP?: string;
  TX_DESCONTO_CODP?: string;
  VL_DESCONTO?: string;
  ID_STATUS_ORCAMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_ENTREGA?: number;
  ID_STATUS_ESTOQUE?: number;
  ID_STATUS_FINANCEIRO?: number;
  FLAG_VENDA_ATACADO?: number;
  STATUS_PEDI?: string;
  STATUS_FINA?: string;
  STATUS_ENTR?: string;
  STATUS_ESTO?: string;
  ID_TIPO_ENTREGA?: number | null;
  PRIORIDADE?: string;
  ID_TIPO_FRETE?: number;
  ID_FORMATO_ENVIO?: number;
  PRAZO_ENTREGA_DIA?: number;
  QT_VOLUME?: number;
  CODIGO_CORREIOS?: string;
  VL_FRETE?: string;
  PESO_FRETE_GR?: number | null;
  ALTURA_VOLUME?: number;
  LARGURA_VOLUME?: number;
  COMPRIMENTO_VOLUME?: number;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_VENDA?: Date | string | null;
  DATA_LIBERACAO?: Date | string | null;
  DATA_RETIRADA?: Date | string | null;
  DATA_PAGAMENTO?: Date | string | null;
  DATA_ESTOQUE?: Date | string | null;
  DATA_ESTORNO?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATA?: Date | string | null;
  HORA?: string;
  DATA_VALIDADE_ORC?: Date | string | null;
  DATADOCADASTRO?: Date | string | null;
  EQUIPAMENTO?: string | null;
  MODELO?: string | null;
  SERIAL?: string | null;
  TERCEIRIZADO?: string | null;
  TECNICO?: string | null;
  ID_STATUS_OS?: number | null;
  STATUS_OS?: string | null;
  ENTRADA?: string | null;
  DEFEITO?: string | null;
  LAUDO?: string | null;
  ANOTACOES?: string;
  ID_PROTOCOLO?: number;
  NFE_CHAVE?: string | null;
  NFE_LOTE?: string | null;
  NFE_NUMERO?: string | null;
  NFE_OPERACAO?: string | null;
  NFE_CHAVE_DEVOLUCAO?: string | null;
  NFSE?: string | null;
  INFO_NOTAFISCAL?: string | null;
}

export interface TblSellerInformation extends RowDataPacket {
  ID_VENDEDOR?: number;
  NOME_VENDEDOR?: string;
  IMAGEM_VENDEDOR?: string;
  TELEFONE_VENDEDOR?: string;
  WHATSAPP_VENDEDOR?: string;
  EMAIL_VENDEDOR?: string;
}

export interface TblCustomerInformation extends RowDataPacket {
  ID_CLIENTE?: number;
  NOME_CLIENTE?: string;

  DATADOCADASTRO?: Date | string | null;
  DT_ULTIMA_COMPRA?: Date | string | null;

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

export interface TblShippingInformation extends RowDataPacket {
  ID_TRANSPORTADORA?: number;
  NOME?: string;

  FONE?: string;
  WHATSAPP?: string;
  EMAIL?: string;
  CNPJ?: string;
  INSC_ESTADUAL?: string;
  CEP?: string;
  ENDERECO?: string;
  ENDERECO_NUMERO?: string;
  CIDADE?: string;
  UF?: string;
}

export interface TblTradingInformation extends RowDataPacket {
  ID_PROTOCOLO?: number;
  DATA_RETIRADA_PROT?: Date | string | null;
  ID_USUARIO_RETIRADA?: number;
  USUARIO_RETIRADA?: string;
}

export interface TblOrderFindSaleAll extends RowDataPacket {
  DATA_VENDA?: Date | string;
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  CLIENTE_NOME?: string;
  ID_VENDEDOR?: number;
  VENDEDOR_NOME?: string;
  TAXA_TIPO?: string;
  STATUS_PEDI?: string;
  STATUS_FINA?: string;
  STATUS_ENTR?: string;
  STATUS_ESTO?: string;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_SEGURO?: string;
  VL_ACRESCIMO?: string;
  VL_FRETE?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
  VL_TOTAL_BASE_COMISSAO?: string;
  TX_MEDIA_COMISSAO_ATACADO?: string;
  TX_MEDIA_COMISSAO_VAREJO?: string;
  VL_COMISSAO_VENDEDOR?: string;
  PG_FORMA?: string;
  LOCALIZACAO?: string;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_FINANCEIRO?: number;
  flag_comissao?: number;
  FLAG_VENDA_ATACADO?: number;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_LIBERACAO?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATA_ESTORNO?: Date | string | null;
}

export interface TblCustomerOrdersSummary extends RowDataPacket {
  ID_PEDIDO?: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_FRETE?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
}
export interface TblCustomerOrderItems extends RowDataPacket {
  ID_ITEM?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  SKU?: number;
  PRODUTO?: string;
  QT?: number;
  VL_UNITARIO?: string;
  VL_SUBTOTAL?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_FRETE?: string;
  VL_TOTAL?: string;
  STATUS?: string | null;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  DATADOCADASTRO?: Date | string | null;
}
export interface TblStatusHistory extends RowDataPacket {
  ID_PEDIDO?: number;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_VENDA?: Date | string | null;
  DATA_PAGAMENTO?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATA_ESTORNO?: Date | string | null;
}

export interface TblOrderFindCustomerAll extends RowDataPacket {
  ID_PEDIDO?: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_FRETE?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
  ID_CLIENTE?: number;
  ID_VENDEDOR?: number;
  NOMEDOCLIENTE?: string;
  NOMEDOVENDEDOR?: string;
  LOCATION?: string;
  ID_PG_FORMA?: number;
  PG_FORMA?: string;
  ID_STATUS_ORCAMENTO?: number;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_ENTREGA?: number;
  ID_STATUS_ESTOQUE?: number;
  ID_STATUS_FINANCEIRO?: number;
  FLAG_VENDA_ATACADO?: number;
  STATUS_PEDIDO?: string;
  STATUS_FINANCEIRO?: string;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_VENDA?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATADOCADASTRO?: Date | string | null;
}

export interface TblOrderFindSellerAll extends RowDataPacket {
  DATA_VENDA?: Date | string | null;
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  CLIENTE_NOME?: string;
  ID_VENDEDOR?: number;
  VENDEDOR_NOME?: string;
  TAXA_TIPO?: string;
  STATUS_PEDI?: string;
  STATUS_FINA?: string;
  STATUS_ENTR?: string;
  STATUS_ESTO?: string;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_SEGURO?: string;
  VL_ACRESCIMO?: string;
  VL_FRETE?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
  VL_TOTAL_BASE_COMISSAO?: string;
  TX_MEDIA_COMISSAO_ATACADO?: string;
  TX_MEDIA_COMISSAO_VAREJO?: string;
  VL_COMISSAO_VENDEDOR?: string;
  PG_FORMA?: string;
  LOCALIZACAO?: string;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_FINANCEIRO?: number;
  flag_comissao?: number;
  FLAG_VENDA_ATACADO?: number;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_LIBERACAO?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATA_ESTORNO?: Date | string | null;
}

export interface TblOrderSummarySeller extends RowDataPacket {
  DATA_VENDA?: Date | string | null;
  ID_PEDIDO?: number;
  ID_CLIENTE?: number;
  CLIENTE_NOME?: string;
  ID_VENDEDOR?: number;
  VENDEDOR_NOME?: string;
  TAXA_TIPO?: string;
  STATUS_PEDI?: string;
  STATUS_FINA?: string;
  STATUS_ENTR?: string;
  STATUS_ESTO?: string;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_SEGURO?: string;
  VL_ACRESCIMO?: string;
  VL_FRETE?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
  VL_TOTAL_BASE_COMISSAO?: string;
  TX_MEDIA_COMISSAO_ATACADO?: string;
  TX_MEDIA_COMISSAO_VAREJO?: string;
  VL_COMISSAO_VENDEDOR?: string;
  PG_FORMA?: string;
  LOCALIZACAO?: string;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_FINANCEIRO?: number;
  flag_comissao?: number;
  FLAG_VENDA_ATACADO?: number;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_LIBERACAO?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATA_ESTORNO?: Date | string | null;
}
export interface TblOrderItemsSeller extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  ID_VENDEDOR?: number;
  EAN?: string;
  REF?: string;
  SKU?: number | null;
  ETIQUETA?: string;
  ID_TIPO?: number;
  MODELO?: string;
  PRODUTO?: string;
  QT?: number;
  VL_UNITARIO?: string;
  VL_DESCONTO?: string;
  VL_DESCONTO_ADM?: string;
  VL_SEGURO?: string;
  VL_ACRESCIMO?: string;
  VL_FRETE?: string;
  CODIGOP?: string | null;
  PROMOCAO?: number;
  ESTOQUE_LOJA1?: number;
  DEPOSITO1?: number;
  PATH_IMAGEM?: string;
  PATH_PAGE?: string;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  TX_COMISSAO_ATACADO?: string;
  TX_COMISSAO_VAREJO?: string;
  FLAG_COMISSAO?: number;
  FLAG_VENDA_ATACADO?: number;
  ID_STATUS_PEDIDO?: number;
  VL_SUBTOTAL?: string;
  VL_TOTAL_DESCONTO_ADM?: string;
  VL_TOTAL_DESCONTO?: string;
  VL_DESCONTO_TOTAL?: string;
  VL_TOTAL_ITEM?: string;
  VL_TOTAL_BASE_COMISSAO?: string;
  VL_COMISSAO_VENDEDOR?: string;
  DATADOCADASTRO?: Date | string | null;
  ANOTACOES?: string;
}

export interface TblOrderFindLatestAll extends RowDataPacket {
  DATA_VENDA?: Date | string | null;
  ID_TBL_PEDIDO?: number;
  ID_CLIENTE?: number;
  CLIENTE_NOME?: string;
  ID_VENDEDOR?: number;
  VENDEDOR_NOME?: string;
  TAXA_TIPO?: string;
  STATUS_PEDI?: string;
  STATUS_FINA?: string;
  STATUS_ENTR?: string;
  STATUS_ESTO?: string;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_SEGURO?: string;
  VL_ACRESCIMO?: string;
  VL_FRETE?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
  VL_TOTAL_BASE_COMISSAO?: string;
  TX_MEDIA_COMISSAO_ATACADO?: string;
  TX_MEDIA_COMISSAO_VAREJO?: string;
  VL_COMISSAO_VENDEDOR?: string;
  PG_FORMA?: string;
  LOCALIZACAO?: string;
  ID_STATUS_PEDIDO?: number;
  ID_STATUS_FINANCEIRO?: number;
  flag_comissao?: number;
  FLAG_VENDA_ATACADO?: number;
  DATA_ORCAMENTO?: Date | string | null;
  DATA_PEDIDO?: Date | string | null;
  DATA_LIBERACAO?: Date | string | null;
  DATA_ENTREGA?: Date | string | null;
  DATA_ESTORNO?: Date | string | null;
}

export interface TblLatestOrdersSummary extends RowDataPacket {
  ID_PEDIDO?: number;
  QT_ITENS?: number;
  VL_SUBTOTAL?: string;
  VL_FRETE?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_TOTAL_PEDIDO?: string;
}
export interface TblLatestOrderItems extends RowDataPacket {
  ID_ITEM?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  SKU?: number;
  PRODUTO?: string;
  QT?: number;
  VL_UNITARIO?: string;
  VL_SUBTOTAL?: string;
  VL_ACRESCIMO?: string;
  VL_SEGURO?: string;
  VL_DESCONTO?: string;
  VL_FRETE?: string;
  VL_TOTAL?: string;
  STATUS?: string | null;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  QT_ESTORNADA?: number;
  DATADOCADASTRO?: Date | string | null;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultOrderFindSaleAllData = [
  TblOrderFindSaleAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindSaleIdData = [
  TblOrderSummary[],
  TblOrderItems[],
  TblCustomerInformation[],
  TblSellerInformation[],
  TblTradingInformation[],
  TblShippingInformation[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindCustomerAllData = [
  TblOrderFindCustomerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindCustomerIdData = [
  TblCustomerOrdersSummary[],
  TblCustomerOrderItems[],
  TblStatusHistory[],
  TblCustomerInformation[],
  TblSellerInformation[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindSellerAllData = [
  TblOrderFindSellerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindSellerIdData = [
  TblOrderSummarySeller[],
  TblOrderItemsSeller[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindLatestAllData = [
  TblOrderFindLatestAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrderFindLatestIdData = [
  TblLatestOrdersSummary[],
  TblLatestOrderItems[],
  TblStatusHistory[],
  TblCustomerInformation[],
  TblSellerInformation[],
  SpDefaultFeedback[],
  SpOperationResult,
];
