import { ProductFindManagerRelationsV2Dto } from '../dto/product-find-manager-relations-v2.dto';

interface ProductFindManagerRelationsV2QueryResult {
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
    number,
    number,
    number,
    number,
  ];
}

export function ProductFindManagerRelationsV2Query(
  dataJsonDto: ProductFindManagerRelationsV2Dto,
): ProductFindManagerRelationsV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSearch = dataJsonDto.pe_search ?? null;
  const olBrandId = dataJsonDto.pe_brand_id;
  const olTypeId = dataJsonDto.pe_type_id;
  const olSupplierId = dataJsonDto.pe_supplier_id;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = `call sp_product_find_manager_relations_v2(
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

  const queryParams: ProductFindManagerRelationsV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olSearch,
    olBrandId,
    olTypeId,
    olSupplierId,
    olLimit,
  ];

  return { queryString, queryParams };
}
