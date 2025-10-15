import { DeleteCartItemDto } from '../dto/delete-cart-item.dto';

/**
 * Creates a query to authenticate a user
 * @param dataJsonDto Authentication data
 * @returns SQL query string for user authentication
 */
export function DeleteCartItemQuery(dataJsonDto: DeleteCartItemDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdCarrinho = dataJsonDto.ID_CARRINHO;
  const olIdProduto = dataJsonDto.ID_PRODUTO;

  if (!olIdProduto) {
    throw new Error('ID_PRODUTO is required');
  }

  const queryString = ` call sp_cart_item_delete_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olIdCarrinho},
      ${olIdProduto}
      ) `;

  return queryString;
}
