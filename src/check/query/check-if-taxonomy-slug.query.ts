import { CheckIfExistsDto } from '../dto/check-if-exists.dto';

export function CheckIfTaxomomySlugExistsQuery(
  dataJsonDto: CheckIfExistsDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;
  const termo = dataJsonDto.pe_term;

  const queryString = ` call sp_check_if_taxonomy_slug_exists_V2(
           ${olAppId},
            ${olSystemClientId},
            ${olStoreId},
            '${olOrganizationId}',
            '${olMemberId}',
            '${olUserId}',
            ${olPersonId},
            '${termo}'
       ) `;

  return queryString;
}
