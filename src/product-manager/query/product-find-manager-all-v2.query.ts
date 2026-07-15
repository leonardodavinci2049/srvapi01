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
  const olEan = dataJsonDto.pe_ean;
  const olReference = dataJsonDto.pe_reference;
  const olModel = dataJsonDto.pe_model;

  const olTaxonomyId = dataJsonDto.pe_taxonomy_id;
  const olTypeId = dataJsonDto.pe_type_id;
  const olBrandId = dataJsonDto.pe_brand_id;
  const olSupplierId = dataJsonDto.pe_supplier_id;
  const olPhysicalId = dataJsonDto.pe_physical_id;
  const olFlagBestSellers = dataJsonDto.pe_flag_best_sellers;
  const olFlagLowestSelling = dataJsonDto.pe_flag_lowest_selling;
  const olFlagStalledProduct = dataJsonDto.pe_flag_stalled_product;
  const olFlagLatestArrivals = dataJsonDto.pe_flag_latest_arrivals;
  const olFlagPriceLessThan = dataJsonDto.pe_flag_price_less_than;
  const olFlagLowStock = dataJsonDto.pe_flag_low_stock;
  const olFlagNoImage = dataJsonDto.pe_flag_no_image;
  const olFlagNoDescription = dataJsonDto.pe_flag_no_description;
  const olFlagNoSalesCopy = dataJsonDto.pe_flag_no_sales_copy;
  const olFlagPromotion = dataJsonDto.pe_flag_promotion;
  const olFlagFeatured = dataJsonDto.pe_flag_featured;
  const olFlagImported = dataJsonDto.pe_flag_imported;
  const olFlagInactive = dataJsonDto.pe_flag_inactive;
  const olFlagConsignment = dataJsonDto.pe_flag_consignment;
  const olFlagDiscontinued = dataJsonDto.pe_flag_discontinued;
  const olFlagNoInventory = dataJsonDto.pe_flag_no_inventory;
  //pe_flag_Website_Off
  const olFlagWebsiteOff = dataJsonDto.pe_flag_Website_Off; 
//pe_flag_Premium
  const olFlagPremium = dataJsonDto.pe_flag_Premium;
  const olFlagStock = dataJsonDto.pe_flag_stock;
  const olFlagService = dataJsonDto.pe_flag_service;
  const olFlagRegistration = dataJsonDto.pe_flag_registration;
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
        '${olReference}',
        '${olModel}',
        ${olTaxonomyId},
        ${olTypeId},
        ${olBrandId},
        ${olSupplierId},
        ${olPhysicalId},
        ${olFlagBestSellers},
        ${olFlagLowestSelling},
        ${olFlagStalledProduct},
        ${olFlagLatestArrivals},
        ${olFlagPriceLessThan},
        ${olFlagLowStock},
        ${olFlagNoImage},
        ${olFlagNoDescription},
        ${olFlagNoSalesCopy},
        ${olFlagPromotion},
        ${olFlagFeatured},
        ${olFlagImported},
        ${olFlagInactive},
        ${olFlagConsignment},
        ${olFlagDiscontinued},
        ${olFlagNoInventory},
        ${olFlagWebsiteOff},
        ${olFlagPremium},
        ${olFlagStock},
        ${olFlagService},
        ${olFlagRegistration},
        '${olStartDate}',
        '${olEndDate}',
        ${olRecordsQuantity},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}
      ) `;

  // console.log('Query ProductFindManagerAllV2Query: ', queryString);

  return queryString;
}
