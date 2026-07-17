import { ProductFindManagerAllV2Dto } from '../dto/product-find-manager-all-v2.dto';

export function ProductFindManagerAllV2Query(
  dataJsonDto: ProductFindManagerAllV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSearch = dataJsonDto.pe_search ? dataJsonDto.pe_search : '';

  const olEan = dataJsonDto.pe_ean ? dataJsonDto.pe_ean : '';

  const olTaxonomyId = dataJsonDto.pe_taxonomy_id;
  const olTypeId = dataJsonDto.pe_type_id;
  const olBrandId = dataJsonDto.pe_brand_id;
  const olSupplierId = dataJsonDto.pe_supplier_id;
  const olPhysicalId = dataJsonDto.pe_physical_id;
  const olFlagSalesList = dataJsonDto.pe_flag_sales_list;
  const olFlagStockList = dataJsonDto.pe_flag_stock_list;
  const olFlagNoImage = dataJsonDto.pe_flag_no_image;
  const olFlagNoDescription = dataJsonDto.pe_flag_no_description;
  const olFlagNoSalesCopy = dataJsonDto.pe_flag_no_sales_copy;
  const olFlagAdvanced = dataJsonDto.pe_flag_advanced;
  const olFlagInactive = dataJsonDto.pe_flag_inactive;
  const olFlagImported = dataJsonDto.pe_flag_imported;
  const olFlagPremium = dataJsonDto.pe_flag_premium;
  const olFlagVariousLists = dataJsonDto.pe_flag_various_lists;
  const olFlagOperationList = dataJsonDto.pe_flag_operation_list;
  const olStartDate = dataJsonDto.pe_start_date;
  const olEndDate = dataJsonDto.pe_end_date;
  const olRecordsQuantity = dataJsonDto.pe_records_quantity;
  const olPageId = dataJsonDto.pe_page_id;
  const olColumnId = dataJsonDto.pe_column_id;
  const olOrderId = dataJsonDto.pe_order_id;

  const queryString = ` call sp_product_find_manager_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        '${olSearch}',
        '${olEan}',
        ${olTaxonomyId},
        ${olTypeId},
        ${olBrandId},
        ${olSupplierId},
        ${olPhysicalId},
        ${olFlagSalesList},
        ${olFlagStockList},
        ${olFlagNoImage},
        ${olFlagNoDescription},
        ${olFlagNoSalesCopy},
        ${olFlagAdvanced},
        ${olFlagInactive},
        ${olFlagImported},
        ${olFlagPremium},
        ${olFlagVariousLists},
        ${olFlagOperationList},
        '${olStartDate}',
        '${olEndDate}',
        ${olRecordsQuantity},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}
      ) `;

  return queryString;
}
