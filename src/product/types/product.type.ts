import { RowDataPacket } from 'mysql2';

// User information returned from login
export interface tblProductFind extends RowDataPacket {
  ID_PRODUTO?: number;
  ID_TAXONOMY?: number;
  ID_POST?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  SKU?: string;
  ID_TIPO?: number;
  TIPO?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  ESTOQUE_LOJA?: number;
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

export interface tblProductId extends RowDataPacket {
  ID_TBL_PRODUTO?: number;
  ID_POST?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  SKU?: string;
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
  ANOTACOES?: string;

  ID_MARCA?: number;
  MARCA_NOME?: string;
  ID_IMAGEM_MARCA?: number;

  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string;

  META_TITLE?: string;
  META_DESCRIPTION?: string;

  DATADOCADASTRO?: Date;
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

export interface SpTaxonomyRelResult {
  ID_TAXONOMY: number;
  PARENT_ID: number;
  TAXONOMIA: string;
  SLUG: string;
  ORDEM: number;
  LEVEL: number;
}

// Or keep the tuple type and create a related interface
export type SpResultData = [
  tblProductFind[], // Primeiro item: array de usuários
  SpDefaultFeedback[], // Terceiro item: resultado SQL
  SpOperationResult, // Segundo item: array de feedbacks
];

export type SpProductIdData = [
  tblProductId[],
  SpTaxonomyRelResult[],
  SpDefaultFeedback[],
  SpOperationResult,
];
