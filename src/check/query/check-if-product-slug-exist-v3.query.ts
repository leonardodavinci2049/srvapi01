import { CheckIfExistsV3Dto } from '../dto/check-if-exists-v3.dto';

export function CheckIfProductSlugExistV3Query(
  dataJsonDto: CheckIfExistsV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;

  const olPersonId = dataJsonDto.pe_person_id;
  const olTerm = dataJsonDto.pe_term;

  const queryString = ` call sp_check_if_product_slug_exist_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        '${olTerm}'

      ) `;

  return queryString;
}
