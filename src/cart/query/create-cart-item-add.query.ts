import { v4 as UuidV4 } from 'uuid';
import { CreateCartItemAddDto } from '../dto/create-cart-item-Add.dto';

/**
 * Creates a query to authenticate a user
 * @param dataJsonDto Authentication data
 * @returns SQL query string for user authentication
 */
export function CreateCartItemAddQuery(
  dataJsonDto: CreateCartItemAddDto,
): string {
  const OlUuid = UuidV4();
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdCarrinho = dataJsonDto.ID_CARRINHO;
  const olIdProduto = dataJsonDto.ID_PRODUTO;
  if (!olIdProduto) {
    throw new Error('ID_PRODUTO is required');
  }
  const olQt = dataJsonDto.QT ?? 1;

  const olTypeBusiness = dataJsonDto.TYPE_BUSINESS ?? 0;

  const olIp = dataJsonDto.IP ?? '';
  const olCEP = dataJsonDto.CEP ?? '';

  const queryString = ` call sp_cart_item_add_v1(
      '${OlUuid}',
      '${olIdSystem}',
      '${olIdLoja}',
      '${olIdUsuario}',

      '${olIdCarrinho}',
      '${olIdProduto}',

      '${olQt}',
      '${olTypeBusiness}',
      '${olIp}',
      '${olCEP}'
      ) `;

  return queryString;
}
