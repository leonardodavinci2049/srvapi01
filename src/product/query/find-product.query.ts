import { FindProductDto } from '../dto/find-product.dto';

export function findProductQuery(dataJsonDto: FindProductDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO ?? 0;

  const olIdTaxonomy = dataJsonDto.ID_TAXONOMY ?? 0;
  const olSlugTaxonomy = dataJsonDto.SLUG_TAXONOMY ?? '';
  const olIdProduct = dataJsonDto.ID_PRODUTO ?? 0;
  const OlProduct = dataJsonDto.PRODUTO ?? '';

  const OlFlagEstoque = dataJsonDto.FLAG_ESTOQUE ?? 0;

  const OlQtRegistros = dataJsonDto.QT_REGISTROS ?? 100;
  const OlPaginaId = dataJsonDto.PAGINA_ID ?? 1;
  const OlColunaId = dataJsonDto.COLUNA_ID ?? 1;
  const OlOrderId = dataJsonDto.ORDEM_ID ?? 1;

  const queryString = ` call sp_product_find_v3(
    '${olIdSystem}',
    '${olIdLoja}',
    '${olIdUsuario}',   
    '${olIdTaxonomy}',
    '${olSlugTaxonomy}',

    '${olIdProduct}',
    '${OlProduct}', 
    '${OlFlagEstoque}',       

    '${OlQtRegistros}',
    '${OlPaginaId}',
    '${OlColunaId}',
    '${OlOrderId}'
      ) `;

  return queryString;
}
