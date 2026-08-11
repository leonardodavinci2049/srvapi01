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

export interface TblTaxonomyFindId extends RowDataPacket {
  ID_TAXONOMY?: number;
  PARENT_ID?: number;
  TAXONOMIA?: string;
  PARENT_CATEGORY?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  LEVEL?: number | null;
  ORDEM?: number;
  ID_IMAGEM?: number | null;
  QT_RECORDS?: number | null;
  INATIVO?: number;

  META_TITLE?: string | null;
  META_DESCRIPTION?: string | null;
  ANOTACOES?: string | null;
  CREATEDAT?: string;
  UPDATEDAT?: string;
}

export interface TblCustomerFindId extends RowDataPacket {
  ID_CLIENTE?: number;
  NOME_CLIENTE?: string;
  PATH_IMAGEM?: string;
  DATADOCADASTRO?: Date;
  DT_ULTIMA_COMPRA?: Date;
  FONE1?: string;
  WHATAPP1?: string;
  EMAIL?: string;
  ID_PESSOA_TIPO?: number;
  ACCOUNT_TIPO?: string;
  ID_TIPO_CLIENTE?: number;
  ACCOUNT_STATUS?: string;
  CPF?: string;
  RG?: string;
  RAZAO_SOCIAL?: string;
  NOME_FANTASIA?: string;
  CNPJ?: string;
  INSC_ESTADUAL?: string;
  INSC_MUNICIPAL?: string;
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

export interface TblCustomerFindSellerId extends RowDataPacket {
  ID_VENDEDOR?: number;
  NOME_VENDEDOR?: string;
  IMAGEM_VENDEDOR?: string;
  TELEFONE_VENDEDOR?: string;
  WHATSAPP_VENDEDOR?: string;
  EMAIL_VENDEDOR?: string;
}

export interface TblCustomerFindManagerId extends RowDataPacket {
  ID_CLIENTE: number;
  ID_LOJA: number | null;
  ID_TIPO_CLIENTE: number | null;
  TIPO_CLIENTE: string;
  NOME: string | null;
  EMAIL: string | null;
  FONE1: string | null;
  WHATAPP1: string | null;
  ID_PESSOA_TIPO: number | null;
  ACCOUNT_TIPO: string;
  PATH_IMAGEM: string | null;
  CPF: string | null;
  RG: string | null;
  PRIMEIRO_NOME: string | null;
  SOBRENOME: string | null;
  DATADONASCIMENTO: Date | null;
  CNPJ: string | null;
  RAZAO_SOCIAL: string | null;
  NOME_FANTASIA: string | null;
  INSC_ESTADUAL: string | null;
  INSC_MUNICIPAL: string | null;
  NOME_RESPONSAVEL: string | null;
  CARGO_RESPONSAVEL: string | null;
  ATIVIDADE_PRINCIPAL: string | null;
  ID_VENDEDOR: number | null;
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
  LINKEDIN: string | null;
  INSTAGRAM: string | null;
  TIKTOK: string | null;
  TELEGRAM: string | null;
  INATIVO: number | null;
  VENDEDOR: number | null;
  APROVADO: string | null;
  EMAIL_MKT: number | null;
  RESTRICAO: number | null;
  FLAG_FRETE_GRATIS: number | null;
  VL_PP_DESCONTO: number | null;
  DT_ULTIMA_COMPRA: Date | null;
  ANOTACOES: string | null;
  DATADOCADASTRO: Date | null;
}

export interface TblCustomerFindManagerIdSeller extends RowDataPacket {
  ID_VENDEDOR: number;
  ID_LOJA: number | null;
  NOME: string | null;
  PATH_IMAGEM: string | null;
  FONE1: string | null;
  WHATAPP1: string | null;
  EMAIL: string | null;
}

export interface TblCustomerFindPdvId extends TblCustomerFindManagerId {}

export interface TblCustomerFindPdvIdSeller
  extends TblCustomerFindManagerIdSeller {}

export interface TblCustomerFindAll extends RowDataPacket {
  ID_TAXONOMY: number;
  PARENT_ID: number;
  TAXONOMIA: string;
  ANOTACOES: string | null;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  LEVEL: number | null;
  ORDEM: number;
  ID_IMAGEM: number | null;
  QT_RECORDS: number | null;
  META_TITLE: string | null;
  META_DESCRIPTION: string | null;
}

export interface TblCustomerFindLatestProducts extends RowDataPacket {
  ID_TAXONOMY: number;
  PARENT_ID: number;
  TAXONOMIA: string;
  ANOTACOES: string | null;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  LEVEL: number | null;
  ORDEM: number;
  ID_IMAGEM: number | null;
  QT_RECORDS: number | null;
  META_TITLE: string | null;
  META_DESCRIPTION: string | null;
}

export interface TblCustomerFindManagerAll extends RowDataPacket {
  ID_CUSTOMER: number;
  ID_TIPO_CLIENTE: number;
  ID_PESSOA_TIPO: number;
  NOME: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  RAZAO_SOCIAL: string | null;
  CIDADE: string | null;
  CPF: string | null;
  CNPJ: string | null;
  TIPO_CLIENTE: string;
  TIPO_PESSOA: string;
  EMAIL: string | null;
  PATH_IMAGEM: string | null;
  INATIVO: number | null;
  EMAIL_MKT: number | null;
  VENDEDOR: number | null;
  FLAG_FRETE_GRATIS: number | null;
  APROVADO: string | null;
  GENERO: string | null;
  RESTRICAO: number;
  ULTIMA_COMPRA: Date | null;
  DATA_CADASTRO: Date | null;
}

export interface TblCustomerFindSearch extends RowDataPacket {
  ID_CUSTOMER: number;
  ID_TIPO_CLIENTE: number;
  ID_PESSOA_TIPO: number;
  NOME: string;
  FONE1: string | null;
  WHATAPP1: string | null;
  RAZAO_SOCIAL: string | null;
  CIDADE: string | null;
  CPF: string | null;
  CNPJ: string | null;
  TIPO_CLIENTE: string;
  TIPO_PESSOA: string;
  EMAIL: string | null;
  PATH_IMAGEM: string | null;
  APROVADO: string | null;
  GENERO: string | null;
  RESTRICAO: number;
  ULTIMA_COMPRA: Date | null;
  DATA_CADASTRO: Date | null;
}

export type SpResultCustomerFindSearchData = TblCustomerFindSearch[];

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultCustomerFindIdData = [
  TblCustomerFindId[],
  TblCustomerFindSellerId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerFindManagerIdData = [
  TblCustomerFindManagerId[],
  TblCustomerFindManagerIdSeller[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerFindPdvIdData = [
  TblCustomerFindPdvId[],
  TblCustomerFindPdvIdSeller[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerFindAllData = [
  TblCustomerFindAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerFindManagerAllData = [
  TblCustomerFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerLatestProductsFindAllData = [
  TblCustomerFindLatestProducts[],
  SpDefaultFeedback[],
  SpOperationResult,
];
