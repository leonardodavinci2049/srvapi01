import { TaxonomyUpdInlInactiveV3Dto } from '../dto/taxonomy-upd-inl-inactive-v3.dto';

export function TaxonomyUpdInlInactiveV3Query(
  dataJsonDto: TaxonomyUpdInlInactiveV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olTaxonomyId = dataJsonDto.pe_taxonomy_id;
  const olInactive = dataJsonDto.pe_inactive;

  const queryString = ` call sp_taxonomy_upd_inl_inactive_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olTaxonomyId},
        ${olInactive}
      ) `;

  return queryString;
}
