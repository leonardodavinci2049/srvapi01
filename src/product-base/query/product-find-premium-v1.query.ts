import { ProductFindPremiumV1Dto } from '../dto/product-find-premium-v1.dto';

export function ProductFindPremiumV1Query(
  dataJsonDto: ProductFindPremiumV1Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSearch = dataJsonDto.pe_search ?? '';
  const olTaxonomyId = dataJsonDto.pe_taxonomy_id ?? null;
  const olTypeId = dataJsonDto.pe_Type_id ?? null;
  const olBrandId = dataJsonDto.pe_brand_id ?? null;
  const olStockFlag = dataJsonDto.pe_stock_flag ?? null;
  const olServiceFlag = dataJsonDto.pe_flag_Service ?? null;
  const olPromotionsFlag = dataJsonDto.pe_flag_Promotions ?? null;
  const olFlagHighlight = dataJsonDto.pe_flag_Highlight ?? null;
  const olFlagLaunch = dataJsonDto.pe_flag_Launch ?? null;
  const olRecordsQuantity = dataJsonDto.pe_records_quantity ?? null;
  const olPageId = dataJsonDto.pe_pageId ?? null;
  const olColumnId = dataJsonDto.pe_columnId ?? null;
  const olOrderId = dataJsonDto.pe_orderId ?? null;

  const queryString = ` call sp_product_find_premium_v1(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        '${olSearch}',
        ${olTaxonomyId},
        ${olTypeId},
        ${olBrandId},
        ${olStockFlag},
        ${olServiceFlag},
        ${olPromotionsFlag},
        ${olFlagHighlight},
        ${olFlagLaunch},
        ${olRecordsQuantity},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}
    ) `;
  // console.log('Generated Query:', queryString);

  return queryString;
}
