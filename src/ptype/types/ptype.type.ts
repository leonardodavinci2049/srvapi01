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

export interface TblPTypeFindALL extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export interface TblPTypeFindManagerAll extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export interface TblPTypeFindSearch extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export type SpResultPTypeFindSearchData = TblPTypeFindSearch[];

export type SpResultPTypeFindAllData = [
  TblPTypeFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultPTypeFindManagerAllData = [
  TblPTypeFindManagerAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultPTypeFindIdData = [
  TblPTypeFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];
