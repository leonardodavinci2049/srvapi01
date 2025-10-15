import { Console } from 'console';
import { UpdAccountGeneralDto } from '../dto/upd-account-general.dto';

export function UpdAccountGeneralQuery(
  dataJsonDto: UpdAccountGeneralDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olNome = dataJsonDto.NOME ?? '';
  const olFone1 = dataJsonDto.FONE1 ?? '';
  const olWhatsapp1 = dataJsonDto.WHATSAPP1 ?? '';
  const olEmailDeLogin = dataJsonDto.EMAIL_DE_LOGIN ?? '';
  const olPathImagem = dataJsonDto.PATH_IMAGEM ?? '';

  const queryString = ` call sp_account_general_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      '${olNome}',
      '${olFone1}',
      '${olWhatsapp1}',
      '${olEmailDeLogin}',
      '${olPathImagem}'
      ) `;
  return queryString;
}
