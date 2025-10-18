import { RowDataPacket } from 'mysql2';

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

export interface tblCheckRecords extends RowDataPacket {
  ID_CHECK?: number;
  ID_RECORD: number;
}

export interface CheckRecordsType {
  ID_CHECK?: number;
  ID_RECORD: number;
}

export type SpCheckIfExistType = [
  tblCheckRecords[],
  SpDefaultFeedback[],
  SpOperationResult,
];
