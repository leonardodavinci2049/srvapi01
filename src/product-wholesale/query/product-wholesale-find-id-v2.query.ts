import { ProductWholesaleFindIdV2Dto } from '../dto/product-wholesale-find-id-v2.dto';

interface ProductWholesaleFindIdV2QueryResult {
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
    string,
  ];
}

export function ProductWholesaleFindIdV2Query(
  dataJsonDto: ProductWholesaleFindIdV2Dto,
): ProductWholesaleFindIdV2QueryResult {
  const queryString = `
    CALL sp_product_wholesale_find_id_v2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const queryParams: ProductWholesaleFindIdV2QueryResult['queryParams'] = [
    dataJsonDto.pe_app_id,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_organization_id,
    dataJsonDto.pe_user_id,
    dataJsonDto.pe_user_name,
    dataJsonDto.pe_user_role,
    dataJsonDto.pe_person_id ?? 0,
    dataJsonDto.pe_product_id ?? 0,
    dataJsonDto.pe_customer_id,
    dataJsonDto.pe_product_slug ?? '',
  ];

  return { queryString, queryParams };
}
