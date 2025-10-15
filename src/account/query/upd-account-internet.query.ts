import { UpdAccountInternetDto } from '../dto/upd-account-internet.dto';

export function UpdAccountInternetQuery(
  dataJsonDto: UpdAccountInternetDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olWebsite = dataJsonDto.WEBSITE;
  const olFacebook = dataJsonDto.FACEBOOK;
  const olTwitter = dataJsonDto.TWITTER;
  const olLinkedin = dataJsonDto.LINKEDIN;
  const olInstagram = dataJsonDto.INSTAGRAM;
  const olTiktok = dataJsonDto.TIKTOK;
  const olTelegram = dataJsonDto.TELEGRAM;

  const queryString = ` call sp_account_internet_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      '${olWebsite}',
      '${olFacebook}',
      '${olTwitter}',
      '${olLinkedin}',
      '${olInstagram}',
      '${olTiktok}',
      '${olTelegram}'
      ) `;

  return queryString;
}
