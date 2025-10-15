import { UpdAccountEmailDto } from '../dto/upd-account-email.dto';

export function UpdAccountEmailQuery(dataJsonDto: UpdAccountEmailDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olEmail = dataJsonDto.EMAIL_DE_LOGIN;

  const queryString = ` call sp_account_email_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      '${olEmail}'
      ) `;

  return queryString;
}
