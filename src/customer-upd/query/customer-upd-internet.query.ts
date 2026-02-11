import { CustomerUpdInternetDto } from '../dto/customer-upd-internet.dto';

export function CustomerUpdInternetQuery(
  dataJsonDto: CustomerUpdInternetDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olWebsite = dataJsonDto.pe_website;
  const olFacebook = dataJsonDto.pe_facebook;
  const olTwitter = dataJsonDto.pe_twitter;
  const olLinkedin = dataJsonDto.pe_linkedin;
  const olInstagram = dataJsonDto.pe_instagram;
  const olTiktok = dataJsonDto.pe_tiktok;
  const olTelegram = dataJsonDto.pe_telegram;

  const queryString = ` call sp_customer_upd_internet_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
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
