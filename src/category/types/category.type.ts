import { RowDataPacket } from 'mysql2';

// User information returned from login
export interface tblCategoryRecords extends RowDataPacket {
  ID_TAXONOMY?: number;
  ID_SYSTEM_CLIENTE?: number;
  ID_LOJA?: number;
  ID_USUARIO?: number;
  ID_TIPO?: number;
  UUID?: string;
  PARENT_ID?: number;
  TAXONOMIA?: string;
  PATH_IMAGEM?: string;
  SLUG?: string;
  ORDEM?: number;
  LEVEL?: number;
  ID_IMAGEM?: number;
  QT_RECORDS?: number;
  INATIVO?: number;
  ANOTACOES?: string;
  META_TITLE?: string;
  META_DESCRIPTION?: string;
  CREATEDAT?: Date;
  UPDATEDAT?: Date;
}

export interface tblCategoryRelRecords extends RowDataPacket {
  ID_TAXONOMY?: number;
  ID_RECORD?: number;
  ID_SYSTEM?: number;
  ID_LOJA?: number;
  ID_USUARIO?: number;
  LEVEL?: number;
  CREATEDAT?: Date;
  UPDATEDAT?: Date;
}

export interface SpDefaultFeedback extends RowDataPacket {
  pl_id_cadastro: number;
  pl_feedback: string;
  pl_id_erro: number;
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

export interface SpCategoryRelResult {
  ID_TAXONOMY: number;
  PARENT_ID: number;
  TAXONOMIA: string;
  SLUG: string;
  ORDEM: number;
  LEVEL: number;
}

// Or keep the tuple type and create a related interface
export type SpResultCategoryData = [
  tblCategoryRecords[], // Primeiro item: array de usuários
  SpDefaultFeedback[], // Terceiro item: resultado SQL
  SpOperationResult, // Segundo item: array de feedbacks
];

export type SpResultTaxonomyMenuData = [
  tblCategoryRecords[], // Primeiro item: array de usuários
  SpDefaultFeedback[], // Terceiro item: resultado SQL
  SpOperationResult, // Segundo item: array de feedbacks
];

export type SpResultTaxonomyIdData = [
  tblCategoryRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];
