import { FindAccountProfileDto } from '../dto/find-account-profile.dto';

export function FindAccountProfileQuery(
  dataJsonDto: FindAccountProfileDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const queryString = ` call sp_account_profile_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario}
      ) `;

  return queryString;
}
