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

export interface TblCarrierFindALL extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export type SpResultCarrierFindAllData = [
  TblCarrierFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export interface TblCarrierFindId extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export interface TblCarrierFindManagerAll extends RowDataPacket {
  ID_TRANSPORTADORA: number;
  ID_PESSOA_TIPO: number;
  TIPO_PESSOA: string;
  NOME: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  EMAIL1: string | null;
  WEBSITE: string | null;
  CNPJ: string | null;
  RAZAO_SOCIAL: string | null;
  NOME_RESPONSAVEL: string | null;
  CPF: string | null;
  PATH_IMAGEM: string | null;
  CREATEDAT: Date;
}

export interface TblCarrierFindSearch extends RowDataPacket {
  ID_TRANSPORTADORA: number;
  ID_PESSOA_TIPO: number;
  TIPO_PESSOA: string;
  NOME: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  EMAIL1: string | null;
  WEBSITE: string | null;
  CNPJ: string | null;
  RAZAO_SOCIAL: string | null;
  NOME_RESPONSAVEL: string | null;
  CPF: string | null;
  PATH_IMAGEM: string | null;
  CREATEDAT: Date;
}

export interface TblCarrierFindManagerId extends RowDataPacket {
  ID_TRANSPORTADORA: number;
  NOME: string | null;
  ID_PESSOA_TIPO: number | null;
  TIPO_PESSOA: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  CONTATO1: string | null;
  EMAIL1: string | null;
  PATH_IMAGEM: string | null;
  RAZAO_SOCIAL: string | null;
  CNPJ: string | null;
  DATA_CNPJ: Date | null;
  INSC_ESTADUAL: string | null;
  INSC_MUNICIPAL: string | null;
  NOME_FANTASIA: string | null;
  NOME_RESPONSAVEL: string | null;
  CARGO: string | null;
  CPF: string | null;
  RG: string | null;
  CEP: string | null;
  ENDERECO: string | null;
  ENDERECO_NUMERO: string | null;
  COMPLEMENTO: string | null;
  BAIRRO: string | null;
  CIDADE: string | null;
  UF: string | null;
  REGIAO_PAIS: string | null;
  PAIS: string | null;
  COD_MUNICIPIO: number | null;
  COD_UF: number | null;
  WEBSITE: string | null;
  FACEBOOK: string | null;
  TWITTER: string | null;
  FRETADOR: number | null;
  DT_ULTIMA_COMPRA: Date | null;
  ANOTACOES: string | null;
  INATIVO: number | null;
  DATADOCADASTRO: Date | null;
}

export type SpResultCarrierFindSearchData = TblCarrierFindSearch[];

export type SpResultCarrierFindManagerIdData = TblCarrierFindManagerId[];

export type SpResultCarrierFindManagerAllData = [
  TblCarrierFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCarrierFindIdData = [
  TblCarrierFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
