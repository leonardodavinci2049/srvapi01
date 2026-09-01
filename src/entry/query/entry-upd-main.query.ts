import { EntryUpdMainDto } from '../dto/entry-upd-main.dto';

interface EntryUpdMainQueryResult {
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
    string,
    number,
    number,
    number,
    string,
  ];
}

export function EntryUpdMainQuery(
  dataJsonDto: EntryUpdMainDto,
): EntryUpdMainQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olEntryId = dataJsonDto.pe_entry_id;
  const olInvoiceNumber = dataJsonDto.pe_invoice_number;
  const olModel = dataJsonDto.pe_model;
  const olFreightValue = dataJsonDto.pe_freight_value;
  const olFreightRate = dataJsonDto.pe_freight_rate;
  const olExchangeRate = dataJsonDto.pe_exchange_rate;
  const olDescription = dataJsonDto.pe_description;

  const queryString = `call sp_entry_upd_main_v2(
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

  const queryParams: EntryUpdMainQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olEntryId,
    olInvoiceNumber,
    olModel,
    olFreightValue,
    olFreightRate,
    olExchangeRate,
    olDescription,
  ];

  return { queryString, queryParams };
}
