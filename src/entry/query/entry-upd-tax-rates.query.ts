import { EntryUpdTaxRatesDto } from '../dto/entry-upd-tax-rates.dto';

interface EntryUpdTaxRatesQueryResult {
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
    number,
    number,
    number,
    number,
    number,
  ];
}

export function EntryUpdTaxRatesQuery(
  dataJsonDto: EntryUpdTaxRatesDto,
): EntryUpdTaxRatesQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olEntryId = dataJsonDto.pe_entry_id;
  const olVlIcms = dataJsonDto.pe_vl_icms;
  const olVlIpi = dataJsonDto.pe_vl_ipi;
  const olVlPis = dataJsonDto.pe_vl_pis;
  const olVlConfins = dataJsonDto.pe_vl_confins;
  const olVlIbs = dataJsonDto.pe_vl_ibs;
  const olVlCbs = dataJsonDto.pe_vl_cbs;

  const queryString = `call sp_entry_upd_tax_rates_v2(
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

  const queryParams: EntryUpdTaxRatesQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olEntryId,
    olVlIcms,
    olVlIpi,
    olVlPis,
    olVlConfins,
    olVlIbs,
    olVlCbs,
  ];

  return { queryString, queryParams };
}
