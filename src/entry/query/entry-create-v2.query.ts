import { v4 as UuidV4 } from 'uuid';
import { EntryCreateV2Dto } from '../dto/entry-create-v2.dto';

interface EntryCreateV2QueryResult {
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
    number,
    string,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    string,
  ];
}

export function EntryCreateV2Query(
  dataJsonDto: EntryCreateV2Dto,
): EntryCreateV2QueryResult {
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
  const olSupplierId = dataJsonDto.pe_supplier_id;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olCategoryId = dataJsonDto.pe_category_id;
  const olInvoiceNumber = dataJsonDto.pe_invoice_number;
  const olModel = dataJsonDto.pe_model;
  const olTotalInvoiceValue = dataJsonDto.pe_total_invoice_value;
  const olTotalProductValue = dataJsonDto.pe_total_product_value;
  const olFreightValue = dataJsonDto.pe_freight_value;
  const olFreightRate = dataJsonDto.pe_freight_rate;
  const olExchangeRate = dataJsonDto.pe_exchange_rate;
  const olVlIcms = dataJsonDto.pe_vl_icms;
  const olVlIpi = dataJsonDto.pe_vl_ipi;
  const olVlPis = dataJsonDto.pe_vl_pis;
  const olVlConfins = dataJsonDto.pe_vl_confins;
  const olVlIbs = dataJsonDto.pe_vl_ibs;
  const olVlCbs = dataJsonDto.pe_vl_cbs;
  const olNotes = dataJsonDto.pe_notes;

  const queryString = `call sp_entry_create_v2(
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

  const queryParams: EntryCreateV2QueryResult['queryParams'] = [
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
    olSupplierId,
    olCarrierId,
    olCategoryId,
    olInvoiceNumber,
    olModel,
    olTotalInvoiceValue,
    olTotalProductValue,
    olFreightValue,
    olFreightRate,
    olExchangeRate,
    olVlIcms,
    olVlIpi,
    olVlPis,
    olVlConfins,
    olVlIbs,
    olVlCbs,
    olNotes,
  ];

  return { queryString, queryParams };
}
