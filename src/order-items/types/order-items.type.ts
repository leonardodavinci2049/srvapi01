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

export interface TblOrderItemFindId extends RowDataPacket {
  ID_MOVIMENTO?: number;
  ID_PEDIDO?: number;
  ID_PRODUTO?: number;
  PRODUTO?: string | null;
  QT?: number;
  VL_UNITARIO?: number;
  VL_FRETE?: number;
  VL_ACRESCIMO?: number;
  VL_SEGURO?: number;
  VL_DESCONTO_ADM?: number;
  VL_DESCONTO?: number;
  VL_DESCONTO_TOTAL?: number;
  VL_CUSTO_PRODUTO?: number;
  VL_SUBTOTAL?: number;
  VL_TOTAL?: number;
  REF?: string | null;
  SKU?: string | null;
  ETIQUETA?: string | null;
  ID_TIPO?: number;
  MODELO?: string | null;
  ID_MARCA?: number;
  MARCA_NOME?: string | null;
  DESCRICAO_TAB?: string | null;
  ID_RMA?: number;
  DT_RETORNO?: Date | null;
  SETOR_RMA?: string | null;
  STATUS?: string | null;
  ESTOQUE_LOJA1?: number;
  DEPOSITO1?: number;
  ESTOQUE_MINIMO?: number;
  ESTOQUE_ATUAL?: number;
  PATH_IMAGEM?: string | null;
  PATH_PAGE?: string | null;
  STQ_PRATELEIRA?: number;
  STQ_GONDULA?: number;
  STQ_FILEIRA?: number;
  IMPORTADO?: number;
  FLAG_CONTROLE_FISICO?: number;
  CONTROLAR_ESTOQUE?: number;
  QT_FISICA_EXPEDIDA?: number;
  STATUS_EXPEDICAO?: string | null;
  CFOP?: string | null;
  VL_NFE_DESC?: number;
  CEST?: number;
  CST?: string | null;
  CST_SAIDA?: string | null;
  NCM?: number;
  TEMPODEGARANTIA_MES?: number;
  TEMPODEGARANTIA_DIA?: number;
  NFE_CEST?: string | null;
  NFE_CFOP_SAIDA?: string | null;
  NFE_CST_CSOSN?: string | null;
  CFOP_SAIDA?: string | null;
  EAN?: string | null;
  FLAG_WEBSITE_OFF?: number;
  VL_ATACADO1?: number;
  VL_CORPORATIVO1?: number;
  VL_VAREJO1?: number;
  ICMS?: number;
  IPI?: number;
  TAXA_PERCA?: number;
  VL_ST?: number;
  UF?: string | null;
  ICMS_BC?: number;
  ICMS_VALOR?: number;
  ICMS_ALIQUOTA?: number;
  ST_BC?: number;
  ST_VALOR?: number;
  ST_ALIQUOTA?: number;
  IPI_CENQ?: string | null;
  IPI_CST?: string | null;
  IPI_BC?: number;
  IPI_VALOR?: number;
  IPI_ALIQUOTA?: number;
  VL_DESPESAS_ADICIONAIS?: number;
  CODIGOP?: string | null;
  PROMOCAO?: number;
  QT_ESTORNADA?: number;
  ANOTACOES?: string | null;
  ID_EQUIPAMENTO?: number | null;
  FLAG_EMISSAO?: number;
  ID_FISICO?: number | null;
  FLAG_SERVICO?: number;
  DATADOCADASTRO?: Date | null;
}

export interface TblOrderItemsFind extends RowDataPacket {
  ID_MOVIMENTO: number;
  ID_PEDIDO: number;
  ID_PRODUTO: number;
  PRODUTO?: string | null;
  ID_FAMILIA?: number;
  PATH_IMAGEM?: string | null;
  PATH_PAGE?: string | null;
  QT?: number;
  VL_UNITARIO?: number;
  VL_DESCONTO?: number;
  VL_DESCONTO_ADM?: number;
  CODIGOP?: string | null;
  PROMOCAO?: number;
  QT_ESTORNADA?: number;
  DATADOCADASTRO?: Date | null;
  VL_DESCONTO_TOTAL?: number;
  VL_CUSTO_PRODUTO?: number;
  VL_SUBTOTAL?: number;
  VL_TOTAL?: number;
  ANOTACOES?: string | null;
}

export type SpResultRecordCreateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordUpdateType = [SpDefaultFeedback[], SpOperationResult];
export type SpResultRecordDeleteType = [SpDefaultFeedback[], SpOperationResult];

export type SpResultOrderItemsFindIdData = [
  TblOrderItemFindId[],
  SpDefaultFeedback[],
  SpOperationResult,
];
export type SpResultOrderItemsFindData = [
  TblOrderItemsFind[],
  SpDefaultFeedback[],
  SpOperationResult,
];
