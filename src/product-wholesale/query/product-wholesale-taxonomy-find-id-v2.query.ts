import { ProductWholesaleTaxonomyFindIdV2Dto } from '../dto/product-wholesale-taxonomy-find-id-v2.dto';

interface ProductWholesaleTaxonomyFindIdV2QueryResult {
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

export function ProductWholesaleTaxonomyFindIdV2Query(
  dataJsonDto: ProductWholesaleTaxonomyFindIdV2Dto,
): ProductWholesaleTaxonomyFindIdV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olTaxonomyId = dataJsonDto.pe_id_taxonomy;

  const queryString = `call sp_product_wholesale_taxonomy_find_id_v2(
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

  const queryParams: ProductWholesaleTaxonomyFindIdV2QueryResult['queryParams'] =
    [
      olAppId,
      olSystemClientId,
      olStoreId,
      olOrganizationId,
      olUserId,
      olUserName,
      olUserRole,
      olPersonId,
      olTaxonomyId,
    ];

  return { queryString, queryParams };
}
