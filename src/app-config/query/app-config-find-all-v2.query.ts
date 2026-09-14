import { AppConfigFindAllV2Dto } from '../dto/app-config-find-all-v2.dto';

interface AppConfigFindAllV2QueryResult {
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

export function AppConfigFindAllV2Query(
  dataJsonDto: AppConfigFindAllV2Dto,
): AppConfigFindAllV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCustomerId = dataJsonDto.pe_customer_id;

  const queryString = `call sp_app_config_find_all_v1(
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

  const queryParams: AppConfigFindAllV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCustomerId,
  ];

  return { queryString, queryParams };
}
