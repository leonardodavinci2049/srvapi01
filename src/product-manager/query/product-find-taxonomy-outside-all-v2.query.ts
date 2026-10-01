import { ProductFindTaxonomyOutsideAllV2Dto } from '../dto/product-find-taxonomy-outside-all-v2.dto';

interface ProductFindTaxonomyOutsideAllV2QueryResult {
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
    string | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
  ];
}

export function ProductFindTaxonomyOutsideAllV2Query(
  dataJsonDto: ProductFindTaxonomyOutsideAllV2Dto,
): ProductFindTaxonomyOutsideAllV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSearch = dataJsonDto.pe_search ?? null;
  const olFlagNoFamily = dataJsonDto.pe_flag_no_family ?? null;
  const olFlagNoGroup = dataJsonDto.pe_flag_no_group ?? null;
  const olFlagNoSubgroup = dataJsonDto.pe_flag_no_subgroup ?? null;
  const olRecordsQuantity = dataJsonDto.pe_records_quantity ?? null;
  const olPageId = dataJsonDto.pe_page_id ?? null;
  const olColumnId = dataJsonDto.pe_column_id ?? null;
  const olOrderId = dataJsonDto.pe_order_id ?? null;

  const queryString = `call sp_product_find_taxonomy_outside_all_v2(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
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

  const queryParams: ProductFindTaxonomyOutsideAllV2QueryResult['queryParams'] =
    [
      olAppId,
      olSystemClientId,
      olStoreId,
      olOrganizationId,
      olUserId,
      olUserName,
      olUserRole,
      olPersonId,
      olSearch,
      olFlagNoFamily,
      olFlagNoGroup,
      olFlagNoSubgroup,
      olRecordsQuantity,
      olPageId,
      olColumnId,
      olOrderId,
    ];

  return { queryString, queryParams };
}
