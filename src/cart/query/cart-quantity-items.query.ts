import { CartQuantityItemsDto } from '../dto/cart-quantity-items.dto';

/**
 * Creates a query to authenticate a user
 * @param dataJsonDto Authentication data
 * @returns SQL query string for user authentication
 */
export function CartQuantityItemsQuery(
  dataJsonDto: CartQuantityItemsDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdCarrinho = dataJsonDto.ID_CARRINHO;

  const queryString = ` call sp_cart_quantity_items_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olIdCarrinho}
      ) `;

  return queryString;
}
