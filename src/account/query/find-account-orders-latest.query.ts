import { FindAccountOrdersLatestDto } from '../dto/find-account-orders-latest.dto';

export function FindAccountOrdersLatestQuery(
  dataJsonDto: FindAccountOrdersLatestDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const queryString = ` call sp_account_orders_latest_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario}
      ) `;

  return queryString;
}
