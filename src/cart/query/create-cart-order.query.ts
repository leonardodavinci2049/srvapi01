import { v4 as UuidV4 } from 'uuid';

import { CreateCartOrderDto } from '../dto/create-cart-order.dto';

/**
 * Creates a query to authenticate a user
 * @param dataJsonDto Authentication data
 * @returns SQL query string for user authentication
 */
export function CreateCartOrderQuery(dataJsonDto: CreateCartOrderDto): string {
  const OlUuid = UuidV4();
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const olIdVendedor = dataJsonDto.ID_VENDEDOR;
  const olIdCarrinho = dataJsonDto.ID_CARRINHO;

  const olTypeBusiness = dataJsonDto.TYPE_BUSINESS;
  const olIdPgForma = dataJsonDto.ID_PG_FORMA;
  const olIdLocation = dataJsonDto.ID_LOCATION;

  const olIp = dataJsonDto.IP ?? '';
  const olCUPOM = dataJsonDto.CUPOM ?? '';
  const olObservacoes = dataJsonDto.OBSERVACOES ?? '';

  const queryString = ` call SP_cart_order_create_v1(
      '${OlUuid}',
      ${olIdSystem},
      ${olIdLoja},

      ${olIdUsuario},
      ${olIdVendedor},      
      ${olIdCarrinho},

      ${olTypeBusiness},
      ${olIdPgForma},
      ${olIdLocation},

      '${olIp}',
      '${olCUPOM}',
      '${olObservacoes}'
      ) `;

  return queryString;
}
