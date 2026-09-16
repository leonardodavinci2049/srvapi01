import { ProductWholesaleTaxonomyFindMenuV2Dto } from '../dto/product-wholesale-taxonomy-find-menu-v2.dto';

interface ProductWholesaleTaxonomyFindMenuV2QueryResult {
  queryString: string;
  queryParams: [
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    number | null,
    number,
  ];
}

export function ProductWholesaleTaxonomyFindMenuV2Query(
  dataJsonDto: ProductWholesaleTaxonomyFindMenuV2Dto,
): ProductWholesaleTaxonomyFindMenuV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = `call sp_product_wholesale_taxonomy_find_menu_v2(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )`;

  const queryParams: ProductWholesaleTaxonomyFindMenuV2QueryResult['queryParams'] =
    [
      olAppId,
      olSystemClientId,
      olStoreId,
      olOrganizationId,
      olUserId,
      olUserName,
      olUserRole,
      olPersonId,
      olLimit,
    ];

  return { queryString, queryParams };
}
