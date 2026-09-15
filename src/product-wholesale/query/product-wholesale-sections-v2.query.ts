import { ProductWholesaleSectionsV2Dto } from '../dto/product-wholesale-sections-v2.dto';

interface ProductWholesaleSectionsV2QueryResult {
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

export function ProductWholesaleSectionsV2Query(
  dataJsonDto: ProductWholesaleSectionsV2Dto,
): ProductWholesaleSectionsV2QueryResult {
  const queryString = `
    CALL sp_product_wholesale_sections_v2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const queryParams: ProductWholesaleSectionsV2QueryResult['queryParams'] = [
    dataJsonDto.pe_app_id,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_organization_id,
    dataJsonDto.pe_user_id,
    dataJsonDto.pe_user_name,
    dataJsonDto.pe_user_role,
    dataJsonDto.pe_person_id ?? 0,
    dataJsonDto.pe_taxonomy_id ?? 0,
    dataJsonDto.pe_brand_id ?? 0,
    dataJsonDto.pe_type_id ?? 0,
    dataJsonDto.pe_customer_id,
    dataJsonDto.pe_promotion_flag ?? 0,
    dataJsonDto.pe_highlight_flag ?? 0,
    dataJsonDto.pe_launch_flag ?? 0,
    dataJsonDto.pe_limit ?? 10,
  ];

  return { queryString, queryParams };
}
