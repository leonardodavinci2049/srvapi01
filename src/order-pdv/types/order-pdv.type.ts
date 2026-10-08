import { ResultSetHeader, RowDataPacket } from 'mysql2';

export interface SpDefaultFeedback extends RowDataPacket {
  sp_return_id: number;
  sp_message: string;
  sp_error_id: number;
}

export type SpFeedbackResult = [SpDefaultFeedback[], ResultSetHeader];

export interface OrdersPdvListRow extends RowDataPacket {
  ID_PEDIDO: number;
  ID_CLIENTE: number;
  CLIENTE_NOME: string | null;
  PATH_IMAGEM: string | null;
  ID_VENDEDOR: number;
  VENDEDOR_NOME: string | null;
  TIPO_VENDA: string;
  STATUS_PEDIDO: string;
  STATUS_FINANCEIRO: string;
  STATUS_ENTREGA: string;
  ID_STATUS_ENTREGA: number | null;
  ID_STATUS_PEDIDO: number | null;
  ID_STATUS_FINANCEIRO: number | null;
  FLAG_COMISSAO: number | null;
  FLAG_VENDA_ATACADO: number | null;
  QT_ITENS: number;
  QT_PRODUTOS_VENDIDOS: string;
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
  DATA_ORCAMENTO: Date | null;
  DATA_PEDIDO: Date | null;
  DATA_LIBERACAO: Date | null;
  DATA_VENDA: Date | null;
  DATA_ENTREGA: Date | null;
  DATA_ESTORNO: Date | null;
}

export type SpResultOrdersPdvFindAllData =
  | [OrdersPdvListRow[], SpDefaultFeedback[], ResultSetHeader]
  | SpFeedbackResult;

export interface OrdersPdvSummaryRow extends RowDataPacket {
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

export interface OrdersPdvItemRow extends RowDataPacket {
  ID_ITEM: number;
  ID_PEDIDO: number;
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string | null;
  QT: number | null;
  VL_UNITARIO: string | null;
  VL_SUBTOTAL: string | null;
  VL_ACRESCIMO: string | null;
  VL_SEGURO: string | null;
  VL_DESCONTO: string;
  VL_FRETE: string | null;
  VL_TOTAL: string | null;
  STATUS: string | null;
  ID_IMAGEM: number | null;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  TEMPODEGARANTIA_MES: number | null;
  TEMPODEGARANTIA_DIA: number | null;
  QT_ESTORNADA: number | null;
  DATADOCADASTRO: Date | null;
}

export interface OrdersPdvStatusRow extends RowDataPacket {
  ID_PEDIDO: number;
  DATA_ORCAMENTO: Date | null;
  DATA_PEDIDO: Date | null;
  DATA_VENDA: Date | null;
  DATA_PAGAMENTO: Date | null;
  DATA_ENTREGA: Date | null;
  DATA_ESTORNO: Date | null;
}

export interface OrdersPdvCustomerRow extends RowDataPacket {
  ID_CLIENTE: number;
  NOME_CLIENTE: string | null;
  DATADOCADASTRO: Date | null;
  DT_ULTIMA_COMPRA: Date | null;
  FONE1: string | null;
  WHATAPP1: string | null;
  EMAIL: string | null;
  PATH_IMAGEM: string | null;
  ID_PESSOA_TIPO: number | null;
  ACCOUNT_TIPO: string;
  ID_TIPO_CLIENTE: number | null;
  ACCOUNT_STATUS: string;
  CPF: string | null;
  RG: string | null;
  RAZAO_SOCIAL: string | null;
  NOME_FANTASIA: string | null;
  CNPJ: string | null;
  INSC_ESTADUAL: string | null;
  INSC_MUNICIPAL: string | null;
  CEP: string | null;
  ENDERECO: string | null;
  ENDERECO_NUMERO: string | null;
  COMPLEMENTO: string | null;
  BAIRRO: string | null;
  CIDADE: string | null;
  UF: string | null;
  PAIS: string | null;
  COD_MUNICIPIO: number | null;
  COD_UF: number | null;
}

export interface OrdersPdvSellerRow extends RowDataPacket {
  ID_VENDEDOR: number;
  NOME_VENDEDOR: string | null;
  IMAGEM_VENDEDOR: string | null;
  TELEFONE_VENDEDOR: string | null;
  WHATSAPP_VENDEDOR: string | null;
  EMAIL_VENDEDOR: string | null;
}

export type SpResultOrdersPdvFindIdData =
  | [
      OrdersPdvSummaryRow[],
      OrdersPdvItemRow[],
      OrdersPdvStatusRow[],
      OrdersPdvCustomerRow[],
      OrdersPdvSellerRow[],
      SpDefaultFeedback[],
      ResultSetHeader,
    ]
  | SpFeedbackResult;
