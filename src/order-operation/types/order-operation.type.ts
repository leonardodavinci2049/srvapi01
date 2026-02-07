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

export interface TblOrderSummaryFindId extends RowDataPacket {
  ID_XXXX?: number;
}

export interface TblOrderItemsFindId extends RowDataPacket {
  ID_XXXX?: number;
}

export interface TblCustomerDetailsFindId extends RowDataPacket {
  ID_XXXX?: number;
}

export interface TblSellerDetailsFindId extends RowDataPacket {
  ID_XXXX?: number;
}
export type SpResultRecordOperationType = [
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultTaxonomyFindIdData = [
  TblOrderSummaryFindId[],
  TblOrderItemsFindId[],
  TblCustomerDetailsFindId[],
  TblSellerDetailsFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
