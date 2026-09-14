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





export interface tblProductWebSections extends RowDataPacket {
  ID_PRODUTO: number;
  SKU?: number;
  PRODUTO?: string;
  DESCRICAO_TAB?: string;
  ETIQUETA?: string;
  REF?: string;
  MODELO?: string;
  TIPO?: string;
  MARCA?: string;
  PATH_IMAGEM_MARCA?: string;
  PATH_IMAGEM?: string | null;
  SLUG?: string | null;
  ESTOQUE_LOJA?: number;
  OURO?: number;
  PRATA?: number;
  BRONZE?: number;
  VL_ATACADO?: number;
  VL_CORPORATIVO?: number;
  VL_VAREJO?: number;
  DECONTO?: number;
  TEMPODEGARANTIA_DIA?: number;
  DESCRICAO_VENDA?: string | null;
  IMPORTADO?: number;
  PROMOCAO?: number;
  LANCAMENTO?: number;
  DATADOCADASTRO?: Date;
}


export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];


export type SpProductWebSectionsDataType = [
  tblProductWebSections[],
  SpDefaultFeedback[],
  SpOperationResult,
];
