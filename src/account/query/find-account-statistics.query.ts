import { FindAccountStatisticsDto } from '../dto/find-account-statistics.dto';

export function FindAccountStatisticsQuery(
  dataJsonDto: FindAccountStatisticsDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const olInterval = dataJsonDto.INTERVAL_DIAS;

  const queryString = ` call sp_account_statistics_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olInterval}
      ) `;

  return queryString;
}
