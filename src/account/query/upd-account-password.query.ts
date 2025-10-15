import { UpdAccountPasswordDto } from '../dto/upd-account-password.dto';

export function UpdAccountPasswordQuery(
  dataJsonDto: UpdAccountPasswordDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olSenhaAtual = dataJsonDto.SENHA;

  const queryString = ` call sp_account_password_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      '${olSenhaAtual}'
      ) `;

  return queryString;
}
