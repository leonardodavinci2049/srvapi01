import { UpdateCartQtItemDto } from '../dto/update-cart-qt-item.dto';

/**
 * Creates a query to authenticate a user
 * @param dataJsonDto Authentication data
 * @returns SQL query string for user authentication
 */
export function UpdateCartQtItemQuery(
  dataJsonDto: UpdateCartQtItemDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdCarrinho = dataJsonDto.ID_CARRINHO;
  const olIdProduto = dataJsonDto.ID_PRODUTO;

  if (!olIdProduto) {
    throw new Error('ID_PRODUTO is required');
  }

  const olQtItem = dataJsonDto.QT_ITEM;

  const queryString = ` call sp_cart_item_QT_update_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},

      ${olIdCarrinho},
      ${olIdProduto},
      
      ${olQtItem}
      ) `;

  return queryString;
}
