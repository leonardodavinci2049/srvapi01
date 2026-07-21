import { ProductWebFindV3Dto } from '../dto/product-web-find-v3.dto';

export function webFindProductQuery(dataJsonDto: ProductWebFindV3Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olSearch = dataJsonDto.pe_search ?? '';

  const olTaxonomyId = dataJsonDto.pe_taxonomy_id ?? 0;
  const olBrandId = dataJsonDto.pe_brand_id ?? 0;

  const olStockFlag = dataJsonDto.pe_stock_flag ?? 0;

  const olRecordCount = dataJsonDto.pe_record_count ?? 100;
  const olPageId = dataJsonDto.pe_page_id ?? 1;
  const olColumnId = dataJsonDto.pe_column_id ?? 1;
  const olOrderId = dataJsonDto.pe_order_id ?? 1;

  const queryString = ` call sp_product_web_find_v3(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId.replace(/'/g, "''")}',
    '${olUserId.replace(/'/g, "''")}',
    '${olUserName.replace(/'/g, "''")}',
    '${olUserRole.replace(/'/g, "''")}',
    ${olPersonId},
    '${olSearch.replace(/'/g, "''")}',
    ${olTaxonomyId},
    ${olBrandId},
    ${olStockFlag},
    ${olRecordCount},
    ${olPageId},
    ${olColumnId},
    ${olOrderId}
  ) `;

 //console.log('Generated Query:', queryString);

  return queryString;
}
