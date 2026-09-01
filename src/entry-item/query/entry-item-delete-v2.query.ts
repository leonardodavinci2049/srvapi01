import { EntryItemDeleteV2Dto } from '../dto/entry-item-delete-v2.dto';

interface EntryItemDeleteV2QueryResult {
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

export function EntryItemDeleteV2Query(
  dataJsonDto: EntryItemDeleteV2Dto,
): EntryItemDeleteV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;

  const queryString = `call sp_entry_item_delete_v2(
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

  const queryParams: EntryItemDeleteV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
  ];

  return { queryString, queryParams };
}
