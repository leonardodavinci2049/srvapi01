import { AppMenuFindTypeV2Dto } from '../dto/app-menu-find-type-v2.dto';

interface AppMenuFindTypeV2QueryResult {
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
    string,
  ];
}

export function AppMenuFindTypeV2Query(
  dataJsonDto: AppMenuFindTypeV2Dto,
): AppMenuFindTypeV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olType = dataJsonDto.pe_type;

  const queryString = `call sp_app_menu_find_type_v1(
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

  const queryParams: AppMenuFindTypeV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCustomerId,
    olType,
  ];

  return { queryString, queryParams };
}
