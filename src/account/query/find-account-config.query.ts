import { FindAccountConfigDto } from '../dto/find-account-config.dto';

export function FindAccountConfigQuery(
  dataJsonDto: FindAccountConfigDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const queryString = ` call sp_account_config_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario}
      ) `;

  return queryString;
}
