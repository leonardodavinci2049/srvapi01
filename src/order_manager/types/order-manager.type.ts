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

// sp_orders_manager_find_all_v2 - orders list rows
export interface TblOrdersManagerFindAll extends RowDataPacket {
  ID_PEDIDO: number;
  ID_CLIENTE: number;
  CLIENTE_NOME: string;
  ID_VENDEDOR: number;
  VENDEDOR_NOME: string;
  PATH_IMAGEM: string;
  TIPO_VENDA: string;
  STATUS_PEDIDO: string;
  STATUS_FINANCEIRO: string;
  STATUS_ENTREGA: string;
  ID_STATUS_ENTREGA: number;
  ID_STATUS_PEDIDO: number;
  ID_STATUS_FINANCEIRO: number;
  FLAG_COMISSAO: number;
  FLAG_VENDA_ATACADO: number;
  QT_ITENS: number;
  VL_SUBTOTAL: string;
  VL_SEGURO: string;
  VL_ACRESCIMO: string;
  VL_FRETE: string;
  VL_DESCONTO: string;
  VL_TOTAL_PEDIDO: string;
  VL_TOTAL_BASE_COMISSAO: string;
  TX_MEDIA_COMISSAO_ATACADO: string;
  TX_MEDIA_COMISSAO_VAREJO: string;
  VL_COMISSAO_VENDEDOR: string;
  PG_FORMA: string | null;
  LOCALIZACAO: string | null;
  DATA_ORCAMENTO: Date | string | null;
  DATA_PEDIDO: Date | string | null;
  DATA_LIBERACAO: Date | string | null;
  DATA_VENDA: Date | string | null;
  DATA_ENTREGA: Date | string | null;
  DATA_ESTORNO: Date | string | null;
}

// sp_orders_manager_find_id_v2 - order totals summary
export interface TblOrderSummary extends RowDataPacket {
  ID_PEDIDO: number;
  QT_ITENS: number;
  VL_SUBTOTAL: string;
  VL_SEGURO: string;
  VL_ACRESCIMO: string;
  VL_FRETE: string;
  VL_DESCONTO: string;
  VL_TOTAL_PEDIDO: string;
  VL_TOTAL_BASE_COMISSAO: string;
  VL_COMISSAO_VENDEDOR: string;
}

// sp_orders_manager_find_id_v2 - order items
export interface TblOrderItems extends RowDataPacket {
  ID_ITEM: number;
  ID_PEDIDO: number;
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string;
  QT: number;
  VL_UNITARIO: string;
  VL_SUBTOTAL: string;
  VL_ACRESCIMO: string;
  VL_SEGURO: string;
  VL_DESCONTO: string;
  VL_FRETE: string;
  VL_TOTAL: string;
  STATUS: string | null;
  ID_IMAGEM: number;
  PATH_IMAGEM: string;
  SLUG: string;
  TEMPODEGARANTIA_MES: number;
  TEMPODEGARANTIA_DIA: number;
  QT_ESTORNADA: number;
  DATADOCADASTRO: Date | string | null;
}

// sp_orders_manager_find_id_v2 - order status dates
export interface TblStatusHistory extends RowDataPacket {
  ID_PEDIDO: number;
  DATA_ORCAMENTO: Date | string | null;
  DATA_PEDIDO: Date | string | null;
  DATA_VENDA: Date | string | null;
  DATA_PAGAMENTO: Date | string | null;
  DATA_ENTREGA: Date | string | null;
  DATA_ESTORNO: Date | string | null;
}

// sp_orders_manager_find_id_v2 - customer data
export interface TblCustomerInformation extends RowDataPacket {
  ID_CLIENTE: number;
  NOME_CLIENTE: string;
  DATADOCADASTRO: Date | string | null;
  DT_ULTIMA_COMPRA: Date | string | null;
  FONE1: string;
  WHATAPP1: string;
  EMAIL: string;
  ID_PESSOA_TIPO: number;
  ACCOUNT_TIPO: string;
  ID_TIPO_CLIENTE: number;
  ACCOUNT_STATUS: string;
  CPF: string;
  RG: string;
  RAZAO_SOCIAL: string;
  NOME_FANTASIA: string;
  CNPJ: string;
  INSC_ESTADUAL: string;
  INSC_MUNICIPAL: string;
  CEP: string;
  ENDERECO: string;
  ENDERECO_NUMERO: string;
  COMPLEMENTO: string;
  BAIRRO: string;
  CIDADE: string;
  UF: string;
  PAIS: string;
  COD_MUNICIPIO: number;
  COD_UF: number;
}

// sp_orders_manager_find_id_v2 - seller data
export interface TblSellerInformation extends RowDataPacket {
  ID_VENDEDOR: number;
  NOME_VENDEDOR: string;
  IMAGEM_VENDEDOR: string;
  TELEFONE_VENDEDOR: string;
  WHATSAPP_VENDEDOR: string;
  EMAIL_VENDEDOR: string;
}

export type SpResultOrdersManagerFindAllData = [
  TblOrdersManagerFindAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultOrdersManagerFindIdData = [
  TblOrderSummary[],
  TblOrderItems[],
  TblStatusHistory[],
  TblCustomerInformation[],
  TblSellerInformation[],
  SpDefaultFeedback[],
  SpOperationResult,
];
