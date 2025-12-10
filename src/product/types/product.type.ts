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
  ID_PRODUTO: number;
  SKU?: number;
  // general //
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;

  // RELATION //
  ID_TIPO?: number;
  TIPO?: string;
  ID_MARCA?: number;
  MARCA?: string;

  ID_FORNECEDOR?: number;
  FORNECEDOR?: string;
  // price //
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  // stock //
  ESTOQUE_LOJA?: number;
  // characteristics //
  TEMPODEGARANTIA_DIA?: number;
  PESO_GR?: number;
  COMPRIMENTO_MM?: number;
  LARGURA_MM?: number;
  ALTURA_MM?: number;
  DIAMETRO_MM?: number;
  // tax_values
  CFOP?: string;
  CST?: string;
  EAN?: string;
  NCM?: number;
  NBM?: string;
  PPB?: number;
  TEMP?: number;

  // imagem //
  ID_IMAGEM?: number;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  ID_IMAGEM_MARCA?: number;

  // flags //
  FLAG_CONTROLE_FISICO?: number;
  CONTROLAR_ESTOQUE?: number;
  CONSIGNADO?: number;
  DESTAQUE?: number;
  PROMOCAO?: number;
  FLAG_SERVICO?: number;
  FLAG_WEBSITE_OFF?: number;
  INATIVO?: number;
  IMPORTADO?: number;
  // various //
  DESCRICAO_VENDA?: string | null;
  ANOTACOES?: string | null;
  META_TITLE?: string | null;
  META_DESCRIPTION?: string | null;
  DT_UPDATE?: Date;
  DATADOCADASTRO?: Date;
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
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
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
  ID_MARCA?: number;
  MARCA?: string;
  ID_IMAGEM_MARCA?: number;
  ID_FORNECEDOR?: number;
  FORNECEDOR?: string;
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

  ID_IMAGEM?: number;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  CATEGORIAS?: string | null;
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
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  DECONTO?: number;
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
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  DECONTO?: number;
  TEMPODEGARANTIA_DIA?: number;
  DESCRICAO_VENDA?: string | null;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
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

export interface tblSupplier extends RowDataPacket {
  ID_FORNECEDOR?: number;
  ID_PRODUTO?: number;
  FORNECEDOR?: string;
  CODIGODOPRODUTO?: string;
  DT_CADASTRO?: Date;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];

export type SpProductFindIdDataType = [
  tblProductId[],
  tbltaxonomy[],
  tblSupplier[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductFindDataType = [
  tblProductFind[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebFindIdDataType = [
  tblProductWebId[],
  tbltaxonomy[],
  tblProductWebRelated[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebSectionsDataType = [
  tblProductWebSections[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductWebFindDataType = [
  tblProductWebFind[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpProductPdvFindDataType = [
  tblProductId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
