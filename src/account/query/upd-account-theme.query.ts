import { UpdAccountThemeDto } from '../dto/upd-account-theme.dto';

export function UpdAccountThemeQuery(dataJsonDto: UpdAccountThemeDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdTema = dataJsonDto.ID_THEMA ?? 1;

  const queryString = ` call sp_account_theme_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olIdTema}
      ) `;

  return queryString;
}
