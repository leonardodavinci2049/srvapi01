import { TaxonomyFindAllV3Dto } from '../dto/taxonomy-find-all-v3.dto';

export function TaxonomyFindAllV3Query(
  dataJsonDto: TaxonomyFindAllV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olParentId = dataJsonDto.pe_parent_id;
  const olSearch = dataJsonDto.pe_search;
  const olFlagInactive = dataJsonDto.pe_flag_inactive;
  const olRecordsQuantity = dataJsonDto.pe_records_quantity;
  const olPageId = dataJsonDto.pe_page_id;
  const olColumnId = dataJsonDto.pe_column_id;

  const queryString = ` call sp_taxonomy_find_all_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olParentId},
        '${olSearch}',
        ${olFlagInactive},
        ${olRecordsQuantity},
        ${olPageId},
        ${olColumnId}
      ) `;

  return queryString;
}
