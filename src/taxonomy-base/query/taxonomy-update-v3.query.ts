import { TaxonomyUpdateV3Dto } from '../dto/taxonomy-update-v3.dto';

export function TaxonomyUpdateV3Query(
  dataJsonDto: TaxonomyUpdateV3Dto,
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
  const olParentId = dataJsonDto.pe_parent_id;
  const olTaxonomyName = dataJsonDto.pe_taxonomy_name;
  const olSlug = dataJsonDto.pe_slug;
  const olImagePath = dataJsonDto.pe_image_path;
  const olSortOrder = dataJsonDto.pe_sort_order;
  const olMetaTitle = dataJsonDto.pe_meta_title;
  const olMetaDescription = dataJsonDto.pe_meta_description;
  const olInactive = dataJsonDto.pe_inactive;
  const olInfo = dataJsonDto.pe_info;

  const queryString = ` call sp_taxonomy_update_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olTaxonomyId},
        ${olParentId},
        '${olTaxonomyName}',
        '${olSlug}',
        '${olImagePath}',
        ${olSortOrder},
        '${olMetaTitle}',
        '${olMetaDescription}',
        ${olInactive},
        '${olInfo}'
      ) `;

  return queryString;
}
