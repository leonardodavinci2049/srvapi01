import { FindAccountOrdersSummaryDto } from '../dto/find-account-orders-summary.dto';

export function FindAccountOrdersSummaryQuery(
  dataJsonDto: FindAccountOrdersSummaryDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdPedido = dataJsonDto.ID_PEDIDO;
  const olTypeBusiness = dataJsonDto.TYPE_BUSINESS;

  const queryString = ` call sp_account_orders_summary_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olIdPedido},
      ${olTypeBusiness}
      ) `;

  return queryString;
}
