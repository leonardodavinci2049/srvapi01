import { EntryItemUpdNotesDto } from '../dto/entry-item-upd-notes.dto';

interface EntryItemUpdNotesQueryResult {
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

export function EntryItemUpdNotesQuery(
  dataJsonDto: EntryItemUpdNotesDto,
): EntryItemUpdNotesQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;
  const olNotes = dataJsonDto.pe_notes;

  const queryString = `call sp_entry_item_upd_notes_v2(
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

  const queryParams: EntryItemUpdNotesQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
    olNotes,
  ];

  return { queryString, queryParams };
}
