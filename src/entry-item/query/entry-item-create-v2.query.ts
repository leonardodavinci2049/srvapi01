import { v4 as UuidV4 } from 'uuid';
import { EntryItemCreateV2Dto } from '../dto/entry-item-create-v2.dto';

interface EntryItemCreateV2QueryResult {
  queryString: string;
  queryParams: [
    string,
    number,
    number,
    number,
    string,
    string | null,
    string,
    string,
    string,
    number | null,
    number,
    number,
  ];
}

export function EntryItemCreateV2Query(
  dataJsonDto: EntryItemCreateV2Dto,
): EntryItemCreateV2QueryResult {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id ?? null;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olEntryId = dataJsonDto.pe_entry_id;
  const olProductId = dataJsonDto.pe_product_id;

  const queryString = `call sp_entry_item_create_v2(
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

  const queryParams: EntryItemCreateV2QueryResult['queryParams'] = [
    OlUuid,
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olMemberId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olEntryId,
    olProductId,
  ];

  return { queryString, queryParams };
}
