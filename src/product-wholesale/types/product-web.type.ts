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

export interface tblProductWebId extends RowDataPacket {
  ID_PRODUTO: number;
  SKU?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  PATH_IMAGEM_MARCA?: string;
  ID_TIPO?: number;
  TIPO?: string;
  ID_MARCA?: number;
  MARCA?: string;
  VL_ATACADO?: string;
  VL_CORPORATIVO?: string;
  VL_VAREJO?: string;
  OURO?: string;
  PRATA?: string;
  BRONZE?: string;
  ESTOQUE_LOJA?: number;
  TEMPODEGARANTIA_DIA?: number;
  PESO_GR?: number;
  COMPRIMENTO_MM?: number;
  LARGURA_MM?: number;
  ALTURA_MM?: number;
  DIAMETRO_MM?: number;
  DESTAQUE?: number;
  PROMOCAO?: number;
  FLAG_SERVICO?: number;
  IMPORTADO?: number;
  DESCRICAO_VENDA?: string | null;
  ANOTACOES?: string | null;
  META_TITLE?: string | null;
  META_DESCRIPTION?: string | null;
  DT_UPDATE?: Date;
  DATADOCADASTRO?: Date;
}

export interface tblProductWebRelated extends RowDataPacket {
  ID_TAXONOMY?: number;
  SKU?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  ESTOQUE_LOJA?: number;
  VL_ATACADO?: string;
  VL_CORPORATIVO?: string;
  VL_VAREJO?: string;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
  DATADOCADASTRO?: Date;
}

export interface tblProductWebFind extends RowDataPacket {
  ID_PRODUTO: number;
  SKU?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  TIPO?: string;
  MARCA?: string;
  PATH_IMAGEM_MARCA?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  ESTOQUE_LOJA?: number;
  OURO?: string;
  PRATA?: string;
  BRONZE?: string;
  VL_ATACADO?: string;
  VL_CORPORATIVO?: string;
  VL_VAREJO?: string;
  DECONTO?: string;
  TEMPODEGARANTIA_DIA?: number;
  DESCRICAO_VENDA?: string | null;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
  DATADOCADASTRO?: Date;
}

export interface tblProductWebSections extends RowDataPacket {
  ID_PRODUTO: number;
  SKU?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  TIPO?: string;
  MARCA?: string;
  PATH_IMAGEM_MARCA?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  ESTOQUE_LOJA?: number;
  OURO?: string;
  PRATA?: string;
  BRONZE?: string;
  VL_ATACADO?: string;
  VL_CORPORATIVO?: string;
  VL_VAREJO?: string;
  DECONTO?: string;
  TEMPODEGARANTIA_DIA?: number;
  DESCRICAO_VENDA?: string | null;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
  DATADOCADASTRO?: Date;
}

export interface tbltaxonomyWebRelated extends RowDataPacket {
  ID_TAXONOMY?: number;
  PARENT_ID?: number;
  TAXONOMIA?: string | null;
  SLUG?: string | null;
  ORDEM?: number;
  LEVEL?: number;
}

export interface TblProductWholesaleTaxonomyFindMenu extends RowDataPacket {
  ID_TAXONOMY: number;
  PARENT_ID: number;
  TAXONOMIA: string;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  LEVEL: number | null;
  ORDEM: number;
  INATIVO: number;
  QTY_PRODUCTS: number;
}

export interface TblProductWholesaleTaxonomyQuantity extends RowDataPacket {
  QTY_TAXONOMIES: number;
}

export interface TblProductWholesaleTaxonomyFindId extends RowDataPacket {
  ID_TAXONOMY: number;
  PARENT_ID: number | null;
  TAXONOMIA: string | null;
  PARENT_CATEGORY: string | null;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  LEVEL: number | null;
  ORDEM: number | null;
  ID_IMAGEM: number | null;
  QT_RECORDS: number;
  INATIVO: number | null;
  META_TITLE: string | null;
  META_DESCRIPTION: string | null;
  ANOTACOES: string | null;
  CREATEDAT: Date | null;
  UPDATEDAT: Date | null;
}

export interface TblProductWholesaleTaxonomyRelated extends RowDataPacket {
  ID_TAXONOMY: number;
  TAXONOMIA: string | null;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  LEVEL: number | null;
  ORDEM: number | null;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpProductWebFindIdDataType = [
  tblProductWebId[],
  tbltaxonomyWebRelated[],
  tblProductWebRelated[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebFindDataType = [
  tblProductWebFind[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebSectionsDataType = [
  tblProductWebSections[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWholesaleTaxonomyFindMenuDataType = [
  TblProductWholesaleTaxonomyFindMenu[],
  TblProductWholesaleTaxonomyQuantity[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWholesaleTaxonomyFindIdDataType = [
  TblProductWholesaleTaxonomyFindId[],
  TblProductWholesaleTaxonomyRelated[],
  SpDefaultFeedback[],
  SpOperationResult,
];
