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

export interface TblProductFindManagerAll extends RowDataPacket {
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string;
  DESCRICAO_TAB: string;
  ETIQUETA: string;
  REF: string;
  MODELO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  TEMPO_ENTREGA_DIA: number | null;
  TEMPO_ENTREGA_HORA: number | null;
  ID_TIPO: number;
  TIPO: string;
  ID_MARCA: number;
  MARCA: string;
  ID_IMAGEM: number;
  PATH_IMAGEM_MARCA: string;
  PATH_IMAGEM: string;
  PATH_PAGE: string;
  SLUG: string;

  QT_VENDAS_HA_DOIS_MESES: number | null;
  QT_VENDAS_MES_ANTERIOR: number | null;
  QT_VENDAS_MES_ATUAL: number | null;
  QT_VENDAS_30_DIAS: number | null;
  QT_VENDAS_HOJE: number | null;

  DATA_ULT_VENDA: Date | string | null;
  CRITICALITY_LEVEL: string | null;
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
  DATADOCADASTRO: Date | string;
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
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  TEMPO_ENTREGA_DIA: number | null;
  TEMPO_ENTREGA_HORA: number | null;
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
  QT_VENDAS_HA_DOIS_MESES: number | null;
  QT_VENDAS_MES_ANTERIOR: number | null;
  QT_VENDAS_MES_ATUAL: number | null;
  QT_VENDAS_30_DIAS: number | null;
  QT_VENDAS_HOJE: number | null;
  DATA_ULT_VENDA: Date | string | null;
  CRITICALITY_LEVEL: string | null;
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
  DT_UPDATE: Date | string | null;
  DESCRICAO_VENDA: string | null;
  ANOTACOES: string | null;
  DATADOCADASTRO: Date | string;
}

export interface TblRelatedCategories extends RowDataPacket {
  ID_TAXONOMY: number;
  PARENT_ID: number | null;
  TAXONOMIA: string;
  SLUG: string;
  ORDEM: number;
  LEVEL: number;
}

export interface TblRelatedSuppliers extends RowDataPacket {
  ID_FORNECEDOR: number;
  FORNECEDOR: string;
  PATH_IMAGEM: string;
  REF_PRODUTO: string;
  WHATSAPP: string;
  FONE: string;
  EMAIL: string;
  WEBSITE: string;
  REF_FORNECEDOR: string;
  DT_ATUALIZACAOO: Date | string | null;
  QT_REGISTER: number;
}

export type SpResultPurchasingFindManagerAllData = [
  TblProductFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultPurchasingFindManagerIdData = [
  TblProductFindManagerId[],
  TblRelatedCategories[],
  TblRelatedSuppliers[],
  SpDefaultFeedback[],
  SpOperationResult,
];
