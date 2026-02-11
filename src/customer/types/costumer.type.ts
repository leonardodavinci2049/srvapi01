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

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultCustomerFindIdData = [
  TblCustomerFindId[],
  TblCustomerFindSellerId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerFindAllData = [
  TblCustomerFindAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCustomerLatestProductsFindAllData = [
  TblCustomerFindLatestProducts[],
  SpDefaultFeedback[],
  SpOperationResult,
];
