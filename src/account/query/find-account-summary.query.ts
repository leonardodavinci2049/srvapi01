import { FindAccountSummaryDto } from '../dto/find-account-summary.dto';

export function FindAccountSummaryQuery(
  dataJsonDto: FindAccountSummaryDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const queryString = ` call sp_account_summary_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario}
      ) `;

  return queryString;
}
