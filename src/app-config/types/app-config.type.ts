import type { RowDataPacket } from 'mysql2';

export interface SpDefaultFeedback extends RowDataPacket {
  sp_return_id: number;
  sp_message: string;
  sp_error_id: number;
}

export interface SpOperationResult {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
}

export interface TblAppConfigFindAll extends RowDataPacket {
  ID: number;
  APP_NAME: string | null;
  CLIENT_NAME: string | null;
  SECTION_JSON: string | null;
  BRAND_JSON: string | null;
  COMPANY_JSON: string | null;
  PAGAMENT_METHOD_JSON: string | null;
  HOME_CATEGORY_JSON: string | null;
  HOME_MENU_JSON: string | null;
  HOME_HERO: string | null;
  UPDATEDAT: Date | null;
}

export interface TblAppConfigMenu extends RowDataPacket {
  ID: number;
  PARENT_ID: number | null;
  NAME: string | null;
  SLUG: string | null;
  URL: string | null;
  TYPE: string | null;
  ICON: string | null;
  IMAGE_URL: string | null;
  CSS_CLASS: string | null;
  SORT_ORDER: number | null;
  IS_ACTIVE: number | null;
  NOTES: string | null;
  UPDATEDAT: Date | null;
}

export interface TblAppMenuFindType extends RowDataPacket {
  ID: number;
  APP_ID: number | null;
  PARENT_ID: number | null;
  NAME: string | null;
  SLUG: string | null;
  URL: string | null;
  TYPE: string | null;
  ICON: string | null;
  IMAGE_URL: string | null;
  CSS_CLASS: string | null;
  SORT_ORDER: number | null;
  IS_ACTIVE: number | null;
  NOTES: string | null;
  CREATEDAT: Date | null;
  UPDATEDAT: Date | null;
}

export type SpResultAppConfigFindAllData = [
  TblAppConfigFindAll[],
  TblAppConfigMenu[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAppMenuFindTypeData = [
  TblAppMenuFindType[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export interface TblAppConfigFindId extends RowDataPacket {
  ID: number;
  APP_NAME: string | null;
  CLIENT_NAME: string | null;
  SECTION_JSON: string | null;
  BRAND_JSON: string | null;
  COMPANY_JSON: string | null;
  PAYMENT_METHOD_JSON: string | null;
  HOME_CATEGORY_JSON: string | null;
  HOME_MENU_JSON: string | null;
  HOME_HERO: string | null;
  UPDATEDAT: Date | null;
}

export type SpResultAppConfigFindIdData = [
  TblAppConfigFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAppConfigUpdateData = [
  SpDefaultFeedback[],
  SpOperationResult,
];
