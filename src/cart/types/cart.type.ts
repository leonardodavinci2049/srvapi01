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


export interface TblCartFindIdV1 extends RowDataPacket {
  ID_PRODUTO: number;

}

export interface TblCartItemFindIdV1 extends RowDataPacket {
  ID_PRODUTO: number;

}


export interface TblCartFindQtV1 extends RowDataPacket {
  ID_PRODUTO: number;

}

export interface TblCartFindAllV1 extends RowDataPacket {
  ID_PRODUTO: number;
}





export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];


export type SpResultCartFindIdData = [
  TblCartFindIdV1[],
  TblCartItemFindIdV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCartFindQtData = [
  TblCartFindQtV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultCartFindAllData = [
  TblCartFindAllV1[],
  SpDefaultFeedback[],
  SpOperationResult,
];