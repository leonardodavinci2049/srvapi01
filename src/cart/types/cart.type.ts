import { RowDataPacket } from 'mysql2';

// User information returned from login
export interface tblCartV1 extends RowDataPacket {
  ID_CARRINHO: number;
  TYPE_BUSINESS?: number;
  CEP?: string;
  STATUS_CART?: string;
  TIPO_FRETE?: string;
  TIPO?: string;
  PG_FORMA?: number;
  VL_FRETE?: number;
  VL_DESCONTO?: number;
  CREATEDAT?: Date;
}

export interface tblCartQtItemsV1 extends RowDataPacket {
  QT_ITEMS: number;
}

export interface tblCartMovementV1 extends RowDataPacket {
  ID_MOVIMENTO: number;
  ID_CARRINHO?: number;
  ID_PRODUTO?: number;
  PRODUTO?: string;
  QT?: number;
  ESTOQUE?: number;
  VL_UNITARIO?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;
}

export interface tblCartOrderV1 extends RowDataPacket {
  ID_PEDIDO: number;
  ID_CARRINHO?: number;
  ID_USUARIO?: number;

  ID_CLIENTE?: number;
  CLIENTE?: number;

  ID_VENDEDOR?: number;
  VENDEDOR?: string;

  ID_STATUS_PEDIDO;
  STATUS_PEDIDO?: string;
  FLAG_VENDA_ATACADO?: number;
}
export interface tblCostumerV1 extends RowDataPacket {
  ID_CLIENTE: number;
  ID_LOJA?: number;
  ID_PESSOA_TIPO?: number;
  ID_TIPO_CLIENTE?: number;

  NOME?: string;
  RAZAO_SOCIAL?: string;
  PATH_IMAGEM?: string;

  FONE1?: string;
  WHATAPP1?: string;
  EMAIL_DE_LOGIN?: string;

  CNPJ?: string;
  CPF?: string;

  ID_VENDEDOR?: number;

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

export interface tblClienteV2 extends RowDataPacket {
  ID_STATUS: number;
}

export interface tblVendedorV1 extends RowDataPacket {
  ID_VENDEDOR: number;
  ID_LOJA?: number;
  NOME?: string;
  PATH_IMAGEM?: string;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL?: string;
}

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

export type SpCartItemAddV1Type = [
  tblCartV1[], // Primeiro item: array de usuários
  SpDefaultFeedback[], // Terceiro item: resultado SQL
  SpOperationResult, // Segundo item: array de feedbacks
];

// Or keep the tuple type and create a related interface
export type SpCartItemsSelectV1Type = [
  tblCartV1[],
  tblCartMovementV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartItemQtUpdateV1Type = [
  tblCartV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartItemDeleteV1Type = [
  tblCartV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartQuantityItemsV1Type = [
  tblCartQtItemsV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartClearAllV1Type = [
  tblCartOrderV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartCheckCustomerType = [
  tblClienteV2[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartOrderCreateV1Type = [
  tblCartOrderV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpCartViewCustomerV1Type = [
  tblCartV1[],
  tblCartMovementV1[],
  tblCostumerV1[],
  tblVendedorV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];
