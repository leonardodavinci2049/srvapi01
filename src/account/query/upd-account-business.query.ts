import { UpdAccountBusinessDto } from '../dto/upd-account-business.dto';

export function UpdAccountBusinessQuery(
  dataJsonDto: UpdAccountBusinessDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const olCNPJ = dataJsonDto.CNPJ;
  const olRazaoSocial = dataJsonDto.RAZAO_SOCIAL;
  const olInscricaoEstadual = dataJsonDto.INSC_ESTADUAL;
  const olInscricaoMunicipal = dataJsonDto.INSC_MUNICIPAL;
  const olNomeResponsavel = dataJsonDto.NOME_RESPONSAVEL;
  const olAtividadePrincipal = dataJsonDto.ATIVIDADE_PRINCIPAL;

  const queryString = ` call sp_account_business_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      '${olCNPJ}',
      '${olRazaoSocial}',
      '${olInscricaoEstadual}',
      '${olInscricaoMunicipal}',
      '${olNomeResponsavel}',
      '${olAtividadePrincipal}'
      ) `;

  return queryString;
}
