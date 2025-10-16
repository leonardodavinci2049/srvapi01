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

export interface tblProductId extends RowDataPacket {
  ID_PRODUTO?: number;
  SKU?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string;
  SLUG?: string | null;
  ID_IMAGEM_MARCA?: number;
  ID_TIPO?: number;
  TIPO?: string;
  ID_MARCA?: number;
  MARCA_NOME?: string;
  ID_FAMILIA?: number;
  ID_GRUPO?: number;
  ID_SUBGRUPO?: number;
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  ESTOQUE_LOJA?: number;
  TEMPODEGARANTIA_DIA?: number;
  PESO_GR?: number;
  COMPRIMENTO_MM?: number;
  LARGURA_MM?: number;
  ALTURA_MM?: number;
  DIAMETRO_MM?: number;
  CFOP?: string;
  CST?: string;
  EAN?: string;
  NCM?: number;
  NBM?: string;
  PPB?: number;
  TEMP?: number;
  FLAG_CONTROLE_FISICO?: number;
  CONTROLAR_ESTOQUE?: number;
  CONSIGNADO?: number;
  DESTAQUE?: number;
  PROMOCAO?: number;
  FLAG_SERVICO?: number;
  FLAG_WEBSITE_OFF?: number;
  INATIVO?: number;
  IMPORTADO?: number;
  DESCRICAO_VENDA?: string | null;
  ANOTACOES?: string | null;
  META_TITLE?: string | null;
  META_DESCRIPTION?: string | null;
  DATADOCADASTRO?: Date;
}

export interface tblProductFind extends RowDataPacket {
  ID_PRODUTO: number;
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
  TX_PRODUTO_LOJA?: number;
  DECONTO?: number;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  DESCRICAO_VENDA?: string | null;
  ID_MARCA?: number;
  MARCA_NOME?: string;
  ID_IMAGEM_MARCA?: number;
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  DATADOCADASTRO?: Date;
}

export interface tbltaxonomy extends RowDataPacket {
  ID_TAXONOMY?: number;
  PARENT_ID?: number;
  TAXONOMIA?: string | null;
  SLUG?: string | null;
  ORDEM?: number;
  LEVEL?: number;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];

export type SpProductFindIdDataType = [
  tblProductId[],
  tbltaxonomy[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductFindDataType = [
  tblProductFind[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebFindIdDataType = [
  tblProductId[],
  tbltaxonomy[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebFindDataType = [
  tblProductId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductPdvFindDataType = [
  tblProductId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
