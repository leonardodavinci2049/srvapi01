import { TaxonomyUpdMetadataV3Dto } from '../dto/taxonomy-upd-metadata-v3.dto';

export function TaxonomyUpdMetadataV3Query(
  dataJsonDto: TaxonomyUpdMetadataV3Dto,
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
  const olMetaTitle = dataJsonDto.pe_meta_title;
  const olMetaDescription = dataJsonDto.pe_meta_description;
  const olMetaKeywords = dataJsonDto.pe_meta_keywords;

  const queryString = ` call sp_taxonomy_upd_metadata_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olTaxonomyId},
        '${olMetaTitle}',
        '${olMetaDescription}',
        '${olMetaKeywords}'
      ) `;

  return queryString;
}
