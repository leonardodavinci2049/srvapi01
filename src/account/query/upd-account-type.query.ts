import { UpdAccountTypeDto } from '../dto/upd-account-type.dto';

export function UpdAccountTypeQuery(dataJsonDto: UpdAccountTypeDto): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olIdPessoaTipo = dataJsonDto.ID_PESSOA_TIPO; // 1=FISICA 2=JURIDICA

  const queryString = ` call sp_account_type_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olIdPessoaTipo}
      ) `;

  return queryString;
}
