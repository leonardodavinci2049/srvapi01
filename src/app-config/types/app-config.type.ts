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
  DOMINIO: string | null;
  PATH_IMAGEM: string | null;
  FLAG_MAINTENANCE: number | null;
  IS_ACTIVE: number | null;
  UPDATEDAT: Date | null;
}

export interface TblAppConfigFindId extends RowDataPacket {
  ID: number;
  APP_NAME: string | null;
  DOMINIO: string | null;
  PATH_IMAGEM: string | null;
  GENERAL_CONFIG_JSON: string | null;
  COMPANY_INFO_JSON: string | null;
  COMPANY_ABOUT_JSON: string | null;
  COMPANY_ADDRESS_JSON: string | null;
  COMPANY_SEO_JSON: string | null;
  COMPANY_FAQ_JSON: string | null;
  COMPANY_LINKS_JSON: string | null;
  PAYMENT_METHOD_JSON: string | null;
  HOME_INFO_JSON: string | null;
  HOME_BRAND_JSON: string | null;
  HOME_CATEGORY_JSON: string | null;
  HOME_SECTION_JSON: string | null;
  HOME_MENU_JSON: string | null;
  HOME_HERO_JSON: string | null;
  FLAG_MAINTENANCE: number | null;
  IS_ACTIVE: number | null;
  NOTES: string | null;
  UPDATEDAT: Date | null;
  CREATEDAT: Date | null;
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

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultAppConfigFindAllData = [
  TblAppConfigFindAll[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAppConfigFindIdData = [
  TblAppConfigFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];

export type SpResultAppMenuFindTypeData = [
  TblAppMenuFindType[],
  SpDefaultFeedback[],
  SpOperationResult,
];
