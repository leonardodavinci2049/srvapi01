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

export interface TblSellerFindManagerAll extends RowDataPacket {
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
  ULTIMA_COMPRA: Date | null;
  DATA_CADASTRO: Date | null;
}

export interface TblSellerFindSearch extends RowDataPacket {
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
  ULTIMA_COMPRA: Date | null;
  DATA_CADASTRO: Date | null;
}

export interface TblSellerFindId extends RowDataPacket {
  ID_SELLER: number;
  ID_LOJA: number | null;
  ID_TIPO_CLIENTE: number | null;
  ACCOUNT_STATUS: string;
  NOME: string | null;
  EMAIL: string | null;
  FONE1: string | null;
  WHATAPP1: string | null;
  ID_PESSOA_TIPO: number | null;
  ACCOUNT_TIPO: string;
  CPF: string | null;
  PRIMEIRO_NOME: string | null;
  SOBRENOME: string | null;
  PATH_IMAGEM: string | null;
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
  VENDEDOR: number | null;
  DATADOCADASTRO: Date | null;
}

export interface TblSellerFindManagerId extends RowDataPacket {
  ID_SELLER: number;
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
  VL_PP_DESCONTO: string | null;
  DT_ULTIMA_COMPRA: Date | null;
  ANOTACOES: string | null;
  DATADOCADASTRO: Date | null;
}

export type SpResultSellerFindSearchData = TblSellerFindSearch[];

export type SpResultSellerFindManagerAllData = [
  TblSellerFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultSellerFindManagerIdData = [
  TblSellerFindManagerId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SellerFindIdData = TblSellerFindId[];
