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

export interface TblEntryItemFindAll extends RowDataPacket {
  ID_MOVIMENTO: number;
  ID_ENTRADA: number;
  ID_USUARIO: number;
  USUARIO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  ID_TRANSPORTADORA: number | null;
  TRANSPORTADORA: string | null;
  ID_MARCA: number | null;
  MARCA_NOME: string | null;
  ID_PRODUTO: number;
  PRODUTO: string;
  MODELO: string | null;
  REF_PRODUTO: string | null;
  IMPORTADO: number | null;
  TIPO_PRODUTO: string;
  ID_IMAGEM: number | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  QT_COMPRADA: number;
  QT_RECEBIDA: number;
  VL_UNIT_REAL: string;
  VL_FRETE_REAL: string;
  VL_NOTA: string;
  VL_UNIT_DOLAR: string;
  CAMBIO: string;
  VL_ICMS: string;
  VL_IPI: string;
  VL_ST: string;
  VL_IBS: string;
  VL_CBS: string;
  CST: string;
  CFOP: string;
  NCM: string;
  VL_TOTAL_IMPOSTO: string;
  VL_CUSTO: string;
  DT_ENTRADA: Date | string | null;
}

export interface TblEntryItemFindEntryId extends RowDataPacket {
  ID_MOVIMENTO: number;
  ID_ENTRADA: number;
  ID_USUARIO: number;
  USUARIO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  ID_TRANSPORTADORA: number | null;
  TRANSPORTADORA: string | null;
  ID_MARCA: number | null;
  MARCA_NOME: string | null;
  ID_PRODUTO: number;
  PRODUTO: string;
  MODELO: string | null;
  REF_PRODUTO: string | null;
  IMPORTADO: number | null;
  TIPO_PRODUTO: string;
  REF_FORNECEDOR: string | null;
  ID_IMAGEM: number | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  QT_COMPRADA: number;
  QT_RECEBIDA: number;
  VL_UNIT_REAL: string;
  VL_FRETE_REAL: string;
  VL_NOTA: string;
  VL_UNIT_DOLAR: string;
  CAMBIO: string;
  ESTOQUE_LOJA: number | null;
  VL_ATACADO: string | null;
  VL_CORPORATIVO: string | null;
  VL_VAREJO: string | null;
  VL_ICMS: string;
  VL_IPI: string;
  VL_ST: string;
  VL_IBS: string;
  VL_CBS: string;
  BASE_ICMS: string;
  BASE_ST: string;
  BASE_IPI: string;
  BASE_IBS: string;
  BASE_CBS: string;
  CST: string;
  CFOP: string;
  NCM: string;
  VL_TOTAL_IMPOSTO: string;
  VL_CUSTO: string;
  DT_ENTRADA: Date | string | null;
}

export interface TblEntryItemFindId extends RowDataPacket {
  ID_MOVIMENTO: number;
  ID_ENTRADA: number;
  ID_USUARIO: number;
  USUARIO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  ID_TRANSPORTADORA: number | null;
  TRANSPORTADORA: string | null;
  ID_MARCA: number | null;
  MARCA_NOME: string | null;
  ID_PRODUTO: number;
  PRODUTO: string;
  MODELO: string | null;
  REF_PRODUTO: string | null;
  IMPORTADO: number | null;
  TIPO_PRODUTO: string;
  REF_FORNECEDOR: string | null;
  ID_IMAGEM: number | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  QT_COMPRADA: number;
  QT_RECEBIDA: number;
  VL_UNIT_REAL: string;
  VL_FRETE_REAL: string;
  VL_NOTA: string;
  VL_UNIT_DOLAR: string;
  CAMBIO: string;
  ESTOQUE_LOJA: number | null;
  VL_ATACADO: string | null;
  VL_CORPORATIVO: string | null;
  VL_VAREJO: string | null;
  VL_ICMS: string;
  VL_IPI: string;
  VL_ST: string;
  VL_IBS: string;
  VL_CBS: string;
  BASE_ICMS: string;
  BASE_ST: string;
  BASE_IPI: string;
  BASE_IBS: string;
  BASE_CBS: string;
  CST: string;
  CFOP: string;
  NCM: string;
  VL_TOTAL_IMPOSTO: string;
  VL_ULTIMO_CUSTO: string;
  VL_CUSTO: string;
  VL_CUSTOREAL: string;
  TX_PRODUTO_LUCROATACADO: string;
  TX_PRODUTO_LUCROVAREJO: string;
  TX_PRODUTO_LUCROCORPORATIVO: string;
  ANOTACOES: string | null;
  DT_UPDATE: Date | string | null;
  DT_ENTRADA: Date | string | null;
}

export interface TblEntryItemFindSearch extends RowDataPacket {
  ID_MOVIMENTO: number;
  ID_ENTRADA: number;
  ID_USUARIO: number;
  USUARIO: string;
  ID_FORNECEDOR: number | null;
  FORNECEDOR: string | null;
  ID_TRANSPORTADORA: number | null;
  TRANSPORTADORA: string | null;
  ID_MARCA: number | null;
  MARCA_NOME: string | null;
  ID_PRODUTO: number;
  PRODUTO: string;
  MODELO: string | null;
  REF_PRODUTO: string | null;
  IMPORTADO: number | null;
  TIPO_PRODUTO: string;
  REF_FORNECEDOR: string | null;
  ID_IMAGEM: number | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  QT_COMPRADA: number;
  QT_RECEBIDA: number;
  VL_UNIT_REAL: string;
  VL_FRETE_REAL: string;
  VL_NOTA: string;
  VL_UNIT_DOLAR: string;
  CAMBIO: string;
  ESTOQUE_LOJA: number | null;
  VL_ATACADO: string | null;
  VL_CORPORATIVO: string | null;
  VL_VAREJO: string | null;
  VL_ICMS: string;
  VL_IPI: string;
  VL_ST: string;
  VL_IBS: string;
  VL_CBS: string;
  BASE_ICMS: string;
  BASE_ST: string;
  BASE_IPI: string;
  BASE_IBS: string;
  BASE_CBS: string;
  CST: string;
  CFOP: string;
  NCM: string;
  VL_TOTAL_IMPOSTO: string;
  VL_ULTIMO_CUSTO: string;
  VL_CUSTO: string;
  VL_CUSTOREAL: string;
  TX_PRODUTO_LUCROATACADO: string;
  TX_PRODUTO_LUCROVAREJO: string;
  TX_PRODUTO_LUCROCORPORATIVO: string;
  ANOTACOES: string | null;
  DT_UPDATE: Date | string | null;
  DT_ENTRADA: Date | string | null;
}

export interface TblEntryItemProductSearch extends RowDataPacket {
  ID_PRODUTO: number;
  PRODUTO: string;
  ID_MARCA: number | null;
  MARCA: string | null;
  MODELO: string | null;
  REF_PRODUTO: string | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  ESTOQUE_LOJA: number | null;
  VL_ATACADO1: string | null;
  VL_CORPORATIVO: string | null;
  VL_VAREJO: string | null;
  INATIVO: number | null;
  IMPORTADO: number | null;
  FLAG_CONTROLE_FISICO: number | null;
  CONTROLAR_ESTOQUE: number | null;
  DATADOCADASTRO: Date | string | null;
  DATA_ULT_ENTRADA: Date | string | null;
  DATA_ULT_VENDA: Date | string | null;
}

export type SpResultEntryItemFindAllData = [
  TblEntryItemFindAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultEntryItemFindEntryIdData = [
  TblEntryItemFindEntryId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultEntryItemFindIdData = [
  TblEntryItemFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultEntryItemFindSearchData = [
  TblEntryItemFindSearch[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultEntryItemProductSearchData = [
  TblEntryItemProductSearch[],
  SpDefaultFeedback[],
  SpOperationResult,
];
