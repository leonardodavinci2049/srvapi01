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

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export interface TblProductFindPdvAll extends RowDataPacket {
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string;
  DESCRICAO_TAB: string;
  ETIQUETA: string;
  REF: string;
  MODELO: string;
  ID_TIPO: number;
  TIPO: string;
  ID_MARCA: number;
  MARCA: string;
  PATH_IMAGEM_MARCA: string;
  ID_IMAGEM: number;
  PATH_IMAGEM: string;
  PATH_PAGE: string;
  SLUG: string;
  ESTOQUE_LOJA: number;
  VL_ATACADO: string;
  VL_CORPORATIVO: string;
  VL_VAREJO: string;
  TX_PRODUTO_LOJA: string;
  OURO: string;
  PRATA: string;
  BRONZE: string;
  DECONTO: string;
  TEMPODEGARANTIA_MES: number;
  TEMPODEGARANTIA_DIA: number;
  DESCRICAO_VENDA: string | null;
  IMPORTADO: number;
  PROMOCAO: number;
  LANCAMENTO: number;
  CATEGORIAS: string;
  DATADOCADASTRO: string;
}

export interface TblProductFindPdvSearch extends RowDataPacket {
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string;
  ESTOQUE_LOJA: number;
  TIPO_VALOR: string;
  VALOR_PRODUTO: string;
  VL_ATACADO: string;
  VL_CORPORATIVO: string;
  VL_VAREJO: string;
  DESCRICAO_TAB: string;
  ETIQUETA: string;
  REF: string;
  MODELO: string;
  ID_TIPO: number;
  TIPO: string;
  ID_MARCA: number;
  MARCA: string;
  PATH_IMAGEM_MARCA: string;
  ID_IMAGEM: number;
  PATH_IMAGEM: string;
  PATH_PAGE: string;
  SLUG: string;
  TX_PRODUTO_LOJA: string;
  OURO: string;
  PRATA: string;
  BRONZE: string;
  DECONTO: string;
  TEMPODEGARANTIA_MES: number;
  TEMPODEGARANTIA_DIA: number;
  DESCRICAO_VENDA: string | null;
  IMPORTADO: number;
  PROMOCAO: number;
  LANCAMENTO: number;
  DATADOCADASTRO: string;
}

export interface TblProductFindPdvId extends RowDataPacket {
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string;
  DESCRICAO_TAB: string;
  ETIQUETA: string;
  REF: string;
  MODELO: string;
  PATH_IMAGEM: string;
  PATH_PAGE: string;
  SLUG: string;
  ID_TIPO: number;
  TIPO: string;
  ID_MARCA: number;
  MARCA: string;
  PATH_IMAGEM_MARCA: string;
  VL_ATACADO: string;
  VL_CORPORATIVO: string;
  VL_VAREJO: string;
  OURO: string;
  PRATA: string;
  BRONZE: string;
  ESTOQUE_LOJA: number;
  TEMPODEGARANTIA_DIA: number;
  PESO_GR: number;
  COMPRIMENTO_MM: number;
  LARGURA_MM: number;
  ALTURA_MM: number;
  DIAMETRO_MM: number;
  CFOP: string;
  CST: string;
  EAN: string;
  NCM: number;
  NBM: string;
  PPB: number;
  TEMP: string;
  DESTAQUE: number;
  PROMOCAO: number;
  FLAG_SERVICO: number;
  IMPORTADO: number;
  META_TITLE: string | null;
  META_DESCRIPTION: string | null;
  DESCRICAO_VENDA: string | null;
  ANOTACOES: string | null;
  DATADOCADASTRO: string;
  DT_UPDATE: string;
}

export interface TblRelatedCategories extends RowDataPacket {
  ID_TAXONOMY: number;
  PARENT_ID: number;
  TAXONOMIA: string;
  SLUG: string;
  ORDEM: number;
  LEVEL: number;
}

export interface TblRelatedProducts extends RowDataPacket {
  ID_TAXONOMY: number;
  SKU: number;
  PRODUTO: string;
  DESCRICAO_TAB: string;
  ETIQUETA: string;
  REF: string;
  MODELO: string;
  PATH_IMAGEM: string;
  SLUG: string;
  ESTOQUE_LOJA: number;
  VL_ATACADO: string;
  VL_CORPORATIVO: string;
  VL_VAREJO: string;
  IMPORTADO: number;
  PROMOCAO: number;
  LANCAMENTO: number;
}

export type SpResultProductFindPdvAllData = [
  TblProductFindPdvAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultProductFindPdvSearchData = [
  TblProductFindPdvSearch[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultProductFindPdvIdData = [
  TblProductFindPdvId[],
  SpDefaultFeedback[],
  TblRelatedCategories[],
  TblRelatedProducts[],
  SpOperationResult,
];
