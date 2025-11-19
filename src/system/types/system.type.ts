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

export interface TblPTypeFindALL extends RowDataPacket {
  ID_TIPO: number;
  TIPO: string;
}

export type SpResultPTypeFindAllData = [
  TblPTypeFindALL[],
  SpDefaultFeedback[],
  SpOperationResult,
];
