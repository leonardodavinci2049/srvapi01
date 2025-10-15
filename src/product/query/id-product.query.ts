import { FindProductIdDto } from '../dto/id-product.dto';

export function findProductIdQuery(dataJsonDto: FindProductIdDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO ?? 0;

  const olIdProduct = dataJsonDto.ID_PRODUTO ?? 0;
  const olSlugProduct = dataJsonDto.SLUG_PRODUTO ?? '';

  const queryString = ` call sp_product_select_id_v3(
        '${olIdSystem}',
        '${olIdLoja}',
        '${olIdUsuario}',   
        '${olIdProduct}',
        '${olSlugProduct}'
      ) `;

  return queryString;
}
