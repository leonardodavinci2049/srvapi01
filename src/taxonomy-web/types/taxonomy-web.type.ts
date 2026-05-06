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
export interface TblTaxonomyRelated extends RowDataPacket {
  ID_TAXONOMY: number;
  TAXONOMIA: string;
  PATH_IMAGEM: string | null;
  SLUG: string | null;
  LEVEL: number | null;
  ORDEM: number;
}

export interface TblTaxonomyWebMenu extends RowDataPacket {
  ID_TAXONOMY?: number;
  PARENT_ID?: number;
  TAXONOMIA?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  LEVEL?: number;
  ORDEM?: number;
  ID_IMAGEM?: number | null;
  QT_RECORDS?: number | null;
}


export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultTaxonomyWebFindIdV3Data = [
  TblTaxonomyFindId[],
  TblTaxonomyRelated[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultTaxonomyWebMenuV3Data = [
  TblTaxonomyWebMenu[],
  SpDefaultFeedback[],
  SpOperationResult,
];
