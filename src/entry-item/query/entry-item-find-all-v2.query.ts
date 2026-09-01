import { EntryItemFindAllV2Dto } from '../dto/entry-item-find-all-v2.dto';

interface EntryItemFindAllV2QueryResult {
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
    string | null,
    number | null,
    number | null,
    number | null,
    number | null,
  ];
}

export function EntryItemFindAllV2Query(
  dataJsonDto: EntryItemFindAllV2Dto,
): EntryItemFindAllV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olTypeId = dataJsonDto.pe_type_id ?? null;
  const olSearch = dataJsonDto.pe_search ?? null;
  const olQtRecords = dataJsonDto.pe_qt_records ?? null;
  const olPageId = dataJsonDto.pe_page_id ?? null;
  const olColumnId = dataJsonDto.pe_column_id ?? null;
  const olOrderId = dataJsonDto.pe_order_id ?? null;

  const queryString = `call sp_entry_item_find_all_v2(
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
        ?,
        ?
      )`;

  const queryParams: EntryItemFindAllV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olTypeId,
    olSearch,
    olQtRecords,
    olPageId,
    olColumnId,
    olOrderId,
  ];

  return { queryString, queryParams };
}
