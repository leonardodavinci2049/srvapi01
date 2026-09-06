import { PurchasingFindManagerIdDto } from '../dto/purchasing-find-manager-id.dto';

interface PurchasingFindManagerIdQueryResult {
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
    number | null,
    number,
  ];
}

export function PurchasingFindManagerIdQuery(
  dataJsonDto: PurchasingFindManagerIdDto,
): PurchasingFindManagerIdQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olTypeBusiness = dataJsonDto.pe_type_business ?? null;
  const olIdProduto = dataJsonDto.pe_product_id;

  const queryString = `call sp_purchasing_find_manager_id_v2(
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

  const queryParams: PurchasingFindManagerIdQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olTypeBusiness,
    olIdProduto,
  ];

  return { queryString, queryParams };
}
