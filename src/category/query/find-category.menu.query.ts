import { FindCategoryMenuDto } from '../dto/find-category.menu.dto ';

export function findCategoryMenuQuery(
  dataJsonDto: FindCategoryMenuDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO ?? 0;
  const olIdTipo = dataJsonDto.ID_TIPO ?? 0;

  const queryString = ` call sp_taxonomy_sel_menu_v1(
    '${olIdSystem}',
    '${olIdLoja}',
    '${olIdUsuario}',   
    '${olIdTipo}' 
      ) `;

  return queryString;
}
