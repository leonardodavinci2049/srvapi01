import { EntryItemFindEntryIdV2Dto } from '../dto/entry-item-find-entry-id-v2.dto';

interface EntryItemFindEntryIdV2QueryResult {
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
    number | null,
  ];
}

export function EntryItemFindEntryIdV2Query(
  dataJsonDto: EntryItemFindEntryIdV2Dto,
): EntryItemFindEntryIdV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olEntryId = dataJsonDto.pe_entry_id;
  const olLimit = dataJsonDto.pe_limit ?? null;

  const queryString = `call sp_entry_item_find_entry_id_v2(
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

  const queryParams: EntryItemFindEntryIdV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olEntryId,
    olLimit,
  ];

  return { queryString, queryParams };
}
