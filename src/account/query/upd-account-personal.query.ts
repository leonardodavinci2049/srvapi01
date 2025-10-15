import { UpdAccountPersonalDto } from '../dto/upd-account-personal.dto';

export function UpdAccountPersonalQuery(
  dataJsonDto: UpdAccountPersonalDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const olCpf = dataJsonDto.CPF ?? '';
  const olPrimeiroNome = dataJsonDto.PRIMEIRO_NOME ?? '';
  const olSobrenome = dataJsonDto.SOBRENOME ?? '';
  const olPathImagem = dataJsonDto.PATH_IMAGEM ?? '';
  const olDataDeNascimento = dataJsonDto.DATADONASCIMENTO ?? '';

  const queryString = ` call sp_account_personal_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},    
      '${olCpf}',
      '${olPrimeiroNome}',
      '${olSobrenome}',
      '${olPathImagem}',
      '${olDataDeNascimento}'
      ) `;

  return queryString;
}
