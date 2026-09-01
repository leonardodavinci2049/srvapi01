import { EntryFindSearchV2Dto } from '../dto/entry-find-search-v2.dto';

interface EntryFindSearchV2QueryResult {
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
  ];
}

export function EntryFindSearchV2Query(
  dataJsonDto: EntryFindSearchV2Dto,
): EntryFindSearchV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSearch = dataJsonDto.pe_search ?? null;
  const olLimit = dataJsonDto.pe_limit ?? null;

  const queryString = `call sp_entry_find_search_v2(
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

  const queryParams: EntryFindSearchV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olSearch,
    olLimit,
  ];

  return { queryString, queryParams };
}
