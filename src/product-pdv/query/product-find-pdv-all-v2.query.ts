import { ProductFindPdvAllV2Dto } from '../dto/product-find-pdv-all-v2.dto';

export function ProductFindPdvAllV2Query(
  dataJsonDto: ProductFindPdvAllV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olProduct = dataJsonDto.pe_product;
  const olTaxonomyId = dataJsonDto.pe_taxonomy_id;
  const olTypeId = dataJsonDto.pe_type_id;
  const olBrandId = dataJsonDto.pe_brand_id;
  const olFlagStock = dataJsonDto.pe_flag_stock;
  const olFlagService = dataJsonDto.pe_flag_service;
  const olRecordsQuantity = dataJsonDto.pe_records_quantity;
  const olPageId = dataJsonDto.pe_page_id;
  const olColumnId = dataJsonDto.pe_column_id;
  const olOrderId = dataJsonDto.pe_order_id;

  const queryString = ` call sp_product_find_pdv_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olProductId},
        '${olProduct}',
        ${olTaxonomyId},
        ${olTypeId},
        ${olBrandId}, 
        ${olFlagStock},
        ${olFlagService},
        ${olRecordsQuantity},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}
      ) `;

  return queryString;
}
