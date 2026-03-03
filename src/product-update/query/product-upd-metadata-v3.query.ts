import { ProductUpdMetadataV3Dto } from '../dto/product-upd-metadata-v3.dto';

export function ProductUpdMetadataV3Query(
  dataJsonDto: ProductUpdMetadataV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olMetaTitle = dataJsonDto.pe_meta_title;
  const olMetaDescription = dataJsonDto.pe_meta_description;

  const queryString = ` call sp_product_upd_metadata_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        '${olMetaTitle}',
        '${olMetaDescription}'
      ) `;

  return queryString;
}
