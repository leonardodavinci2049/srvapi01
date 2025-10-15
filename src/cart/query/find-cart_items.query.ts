import { FindCartItemsDto } from '../dto/find-cart_items.dto';

/**
 * Creates a query to authenticate a user
 * @param dataJsonDto Authentication data
 * @returns SQL query string for user authentication
 */
export function FindCartItemsQuery(dataJsonDto: FindCartItemsDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdCarrinho = dataJsonDto.ID_CARRINHO;
  const olTypeBusiness = dataJsonDto.TYPE_BUSINESS;

  const queryString = ` call sp_cart_items_select_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},

      ${olIdCarrinho},
      ${olTypeBusiness}
      ) `;

  return queryString;
}
