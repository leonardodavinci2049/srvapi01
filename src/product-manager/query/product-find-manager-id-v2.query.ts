import { ProductFindManagerIdV2Dto } from '../dto/product-find-manager-id-v2.dto';

export function ProductFindManagerIdV2Query(
  dataJsonDto: ProductFindManagerIdV2Dto,
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

  const queryString = ` call sp_product_find_manager_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',		
        ${olPersonId},
        ${olTypeBusiness},
        ${olProductId}
      ) `;

  return queryString;
}
