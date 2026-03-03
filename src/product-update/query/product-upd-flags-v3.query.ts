import { ProductUpdFlagsV3Dto } from '../dto/product-upd-flags-v3.dto';

export function ProductUpdFlagsV3Query(
  dataJsonDto: ProductUpdFlagsV3Dto,
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
  const olInactiveFlag = dataJsonDto.pe_inactive_flag;
  const olImportedFlag = dataJsonDto.pe_imported_flag;
  const olPhysicalControlFlag = dataJsonDto.pe_physical_control_flag;
  const olStockControlFlag = dataJsonDto.pe_stock_control_flag;
  const olFeaturedFlag = dataJsonDto.pe_featured_flag;
  const olPromotionFlag = dataJsonDto.pe_promotion_flag;
  const olDiscontinuedFlag = dataJsonDto.pe_discontinued_flag;
  const olServiceFlag = dataJsonDto.pe_service_flag;
  const olWebsiteOffFlag = dataJsonDto.pe_website_off_flag;

  const queryString = ` call sp_product_upd_flags_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        ${olInactiveFlag},
        ${olImportedFlag},
        ${olPhysicalControlFlag},
        ${olStockControlFlag},
        ${olFeaturedFlag},
        ${olPromotionFlag},
        ${olDiscontinuedFlag},
        ${olServiceFlag},
        ${olWebsiteOffFlag}
      ) `;

  return queryString;
}
