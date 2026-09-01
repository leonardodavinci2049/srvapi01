import { EntryProcessInventoryV2Dto } from '../dto/entry-process-inventory-v2.dto';

interface EntryProcessInventoryV2QueryResult {
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

export function EntryProcessInventoryV2Query(
  dataJsonDto: EntryProcessInventoryV2Dto,
): EntryProcessInventoryV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olEntryId = dataJsonDto.pe_entry_id;

  const queryString = `call sp_entry_process_inventori_v2(
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

  const queryParams: EntryProcessInventoryV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olEntryId,
  ];

  return { queryString, queryParams };
}
