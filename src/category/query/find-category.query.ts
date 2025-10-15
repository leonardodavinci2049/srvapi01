import { FindCategoryDto } from '../dto/find-category.dto';

export function findCategoryQuery(dataJsonDto: FindCategoryDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO ?? 0;
  const olIdTipo = dataJsonDto.ID_TIPO ?? 0;
  const olIdTaxonomy = dataJsonDto.ID_TAXONOMIA ?? 0;
  const OlTaxonomia = dataJsonDto.TAXONOMIA ?? '';

  const OlQtRegistros = dataJsonDto.QT_REGISTROS ?? 100;
  const OlPaginaId = dataJsonDto.PAGINA_ID ?? 1;
  const OlColunaId = dataJsonDto.COLUNA_ID ?? 1;
  const OlOrderId = dataJsonDto.ORDEM_ID ?? 1;

  const queryString = ` call sp_taxonomy_sel_all_v1(
    '${olIdSystem}',
    '${olIdLoja}',
    '${olIdUsuario}',  
    '${olIdTipo}', 

    '${olIdTaxonomy}',
    '${OlTaxonomia}',
    
    '${OlQtRegistros}',
    '${OlPaginaId}',
    '${OlColunaId}',
    '${OlOrderId}'
      ) `;

  return queryString;
}
