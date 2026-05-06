import { ProductWebFindIdV3Dto } from "../dto/product-web-find-id-v3.dto";

export function webFindIdProductQuery(
  dataJsonDto: ProductWebFindIdV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olTypeBusiness = dataJsonDto.pe_type_business;
  const olProductId = dataJsonDto.pe_product_id;
  const olProductSlug = dataJsonDto.pe_product_slug ?? '';

  const queryString = ` call sp_product_web_find_id_v3(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId.replace(/'/g, "''")}',
    '${olUserId.replace(/'/g, "''")}',
    '${olUserName.replace(/'/g, "''")}',
    '${olUserRole.replace(/'/g, "''")}',
    ${olPersonId},
    ${olTypeBusiness},
    ${olProductId},
    '${olProductSlug.replace(/'/g, "''")}'
     ) `;

  return queryString;
}
