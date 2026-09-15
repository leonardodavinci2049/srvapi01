import { ProductWholesaleFindAllV2Dto } from '../dto/product-wholesale-find-all-v2.dto';

interface ProductWholesaleFindAllV2QueryResult {
  queryString: string;
  queryParams: [
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    number,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
}

export function ProductWholesaleFindAllV2Query(
  dataJsonDto: ProductWholesaleFindAllV2Dto,
): ProductWholesaleFindAllV2QueryResult {
  const queryString = `
    CALL sp_product_wholesale_find_all_v2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const queryParams: ProductWholesaleFindAllV2QueryResult['queryParams'] = [
    dataJsonDto.pe_app_id,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_organization_id,
    dataJsonDto.pe_user_id,
    dataJsonDto.pe_user_name,
    dataJsonDto.pe_user_role,
    dataJsonDto.pe_person_id ?? 0,
    dataJsonDto.pe_search ?? '',
    dataJsonDto.pe_customer_id,
    dataJsonDto.pe_taxonomy_id ?? 0,
    dataJsonDto.pe_brand_id ?? 0,
    dataJsonDto.pe_stock_flag ?? 0,
    dataJsonDto.pe_qt_records ?? 100,
    dataJsonDto.pe_page_id ?? 0,
    dataJsonDto.pe_column_id ?? 1,
    dataJsonDto.pe_order_id ?? 2,
  ];

  return { queryString, queryParams };
}
