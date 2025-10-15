import { FindAccountOrdersListDto } from '../dto/find-account-orders-list.dto';

export function FindAccountOrdersListQuery(
  dataJsonDto: FindAccountOrdersListDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdPedido = dataJsonDto.ID_PEDIDO;
  const olIdStatusPedido = dataJsonDto.ID_STATUS_PEDIDO;
  const olIdStatusFinanc = dataJsonDto.ID_STATUS_FINANC;
  const olIdStatusEntrega = dataJsonDto.ID_STATUS_ENTREGA;
  const olLimit = dataJsonDto.LIMIT;

  const queryString = ` call sp_account_orders_list_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olIdPedido},
      ${olIdStatusPedido},
      ${olIdStatusFinanc},
      ${olIdStatusEntrega},
      ${olLimit}
      ) `;

  return queryString;
}
