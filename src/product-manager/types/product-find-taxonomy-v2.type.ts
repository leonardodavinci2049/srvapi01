import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { SpDefaultFeedback } from './product-manager.type';

export interface TblProductFindTaxonomy extends RowDataPacket {
  ID_PRODUTO: number;
  SKU: number;
  PRODUTO: string | null;
  REF: string | null;
  MODELO: string | null;
  PATH_IMAGEM: string | null;
  PATH_PAGE: string | null;
  SLUG: string | null;
  CATEGORIAS: string;
  DATADOCADASTRO: Date | null;
}

export type SpResultProductFindTaxonomyData =
  | [TblProductFindTaxonomy[], SpDefaultFeedback[], ResultSetHeader]
  | [SpDefaultFeedback[], ResultSetHeader];
