import { EntryUpdSupplierIdDto } from '../dto/entry-upd-supplier-id.dto';

interface EntryUpdSupplierIdQueryResult {
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
    number,
  ];
}

export function EntryUpdSupplierIdQuery(
  dataJsonDto: EntryUpdSupplierIdDto,
): EntryUpdSupplierIdQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olEntryId = dataJsonDto.pe_entry_id;
  const olSupplierId = dataJsonDto.pe_supplier_id;

  const queryString = `call sp_entry_upd_supplier_id_v2(
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

  const queryParams: EntryUpdSupplierIdQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olEntryId,
    olSupplierId,
  ];

  return { queryString, queryParams };
}
