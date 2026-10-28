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

export interface TblProductFindManagerAll extends RowDataPacket {
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

  QT_VENDAS_HA_DOIS_MESES: number;
  QT_VENDAS_MES_ANTERIOR: number;
  QT_VENDAS_MES_ATUAL: number;
  QT_VENDAS_30_DIAS: number;
  QT_VENDAS_HOJE: number;

  DATA_ULT_VENDA: string;
  ESTOQUE_LOJA: number;
  VL_ATACADO: string;
  VL_CORPORATIVO: string;
  VL_VAREJO: string;
  TX_PRODUTO_LOJA: string;
  OURO: string;
  PRATA: string;
  BRONZE: string;
  DESCONTO: string;
  TEMPODEGARANTIA_MES: number;
  TEMPODEGARANTIA_DIA: number;
  DESCRICAO_VENDA: string | null;
  IMPORTADO: number;
  PROMOCAO: number;
  LANCAMENTO: number;
  CATEGORIAS: string;
  DATADOCADASTRO: string;
}

export interface TblProductFindManagerSearch extends RowDataPacket {
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
  DESCONTO: string;

  TEMPODEGARANTIA_MES: number;
  TEMPODEGARANTIA_DIA: number;
  DESCRICAO_VENDA: string | null;
  IMPORTADO: number;
  PROMOCAO: number;
  LANCAMENTO: number;
  DATADOCADASTRO: string;
}

export interface TblProductFindManagerId extends RowDataPacket {
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
  QT_VENDAS_HA_DOIS_MESES: number;
  QT_VENDAS_MES_ANTERIOR: number;
  QT_VENDAS_MES_ATUAL: number;
  QT_VENDAS_30_DIAS: number;
  QT_VENDAS_HOJE: number;
  DATA_ULT_VENDA: string;
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

export type SpResultProductFindManagerAllData = [
  TblProductFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultProductFindManagerSearchData = [
  TblProductFindManagerSearch[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultProductFindManagerIdData = [
  TblProductFindManagerId[],
  SpDefaultFeedback[],
  TblRelatedCategories[],
  TblRelatedProducts[],
  SpOperationResult,
];

export interface TblProductFindManagerRelations extends RowDataPacket {
  ID_PRODUTO: number;
  PRODUTO: string | null;
  ESTOQUE_LOJA: number | null;
  VL_ATACADO: string | null;
  VL_CORPORATIVO: string | null;
  VL_VAREJO: string | null;
  DESCRICAO_TAB: string | null;
  ETIQUETA: string | null;
  REF: string | null;
  MODELO: string | null;
  ID_TIPO: number | null;
  TIPO: string | null;
  ID_MARCA: number | null;
  MARCA: string | null;
  PATH_IMAGEM_MARCA: string | null;
  FORNECEDOR: string | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  SLUG: string | null;
  DATADOCADASTRO: Date | null;
}

export type SpResultProductFindManagerRelationsData = [
  TblProductFindManagerRelations[],
  SpDefaultFeedback[],
  SpOperationResult,
];
