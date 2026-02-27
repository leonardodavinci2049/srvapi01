import { ProductFindPdvSearchV2Dto } from '../dto/product-find-Pdv-search.dto';

export function ProductFindPdvSearchV2Query(
  dataJsonDto: ProductFindPdvSearchV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olSearch = dataJsonDto.pe_search ? dataJsonDto.pe_search : '';
  const olFlagStock = dataJsonDto.pe_flag_stock;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_product_find_pdv_search_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olCustomerId},
        '${olSearch}',
        ${olFlagStock},
        ${olLimit}
      ) `;

  return queryString;
}
