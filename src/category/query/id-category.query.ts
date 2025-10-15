import { FindCategoryIdDto } from '../dto/id-category.dto';

export function findCategoryIdQuery(dataJsonDto: FindCategoryIdDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO ?? 0;

  const olIdTaxonomy = dataJsonDto.ID_TAXONOMY ?? 0;
  const olSlugTaxonomy = dataJsonDto.SLUG_TAXONOMY ?? '';

  const queryString = ` call sp_taxonomy_sel_id_v2(
        '${olIdSystem}',
        '${olIdLoja}',
        '${olIdUsuario}',   
        '${olIdTaxonomy}', 
        '${olSlugTaxonomy}'
      ) `;

  return queryString;
}
