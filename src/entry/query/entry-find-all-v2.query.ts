import { EntryFindAllV2Dto } from '../dto/entry-find-all-v2.dto';

interface EntryFindAllV2QueryResult {
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
    string | null,
    string | null,
    number | null,
    number | null,
    number | null,
    number | null,
  ];
}

export function EntryFindAllV2Query(
  dataJsonDto: EntryFindAllV2Dto,
): EntryFindAllV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSearch = dataJsonDto.pe_search ?? null;
  const olFlagOperationList = dataJsonDto.pe_flag_operation_list ?? null;
  const olStartDate = dataJsonDto.pe_start_date ?? null;
  const olEndDate = dataJsonDto.pe_end_date ?? null;
  const olQtRecords = dataJsonDto.pe_qt_records ?? null;
  const olPageId = dataJsonDto.pe_page_id ?? null;
  const olColumnId = dataJsonDto.pe_column_id ?? null;
  const olOrderId = dataJsonDto.pe_order_id ?? null;

  const queryString = `call sp_entry_find_all_v2(
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
        ?,
        ?,
        ?
      )`;

  const queryParams: EntryFindAllV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olSearch,
    olFlagOperationList,
    olStartDate,
    olEndDate,
    olQtRecords,
    olPageId,
    olColumnId,
    olOrderId,
  ];

  return { queryString, queryParams };
}
