import { EntryItemUpdTaxRatesDto } from '../dto/entry-item-upd-tax-rates.dto';

interface EntryItemUpdTaxRatesQueryResult {
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
    number,
    number,
    number,
    number,
  ];
}

export function EntryItemUpdTaxRatesQuery(
  dataJsonDto: EntryItemUpdTaxRatesDto,
): EntryItemUpdTaxRatesQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;
  const olVlIcms = dataJsonDto.pe_vl_icms;
  const olVlIpi = dataJsonDto.pe_vl_ipi;
  const olVlSt = dataJsonDto.pe_vl_st;
  const olVlIbs = dataJsonDto.pe_vl_ibs;
  const olVlCbs = dataJsonDto.pe_vl_cbs;
  const olBaseIcms = dataJsonDto.pe_base_icms;
  const olBaseSt = dataJsonDto.pe_base_st;
  const olBaseIpi = dataJsonDto.pe_base_ipi;
  const olBaseIbs = dataJsonDto.pe_base_ibs;
  const olBaseCbs = dataJsonDto.pe_base_cbs;

  const queryString = `call sp_entry_item_upd_tax_rates_v2(
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

  const queryParams: EntryItemUpdTaxRatesQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
    olVlIcms,
    olVlIpi,
    olVlSt,
    olVlIbs,
    olVlCbs,
    olBaseIcms,
    olBaseSt,
    olBaseIpi,
    olBaseIbs,
    olBaseCbs,
  ];

  return { queryString, queryParams };
}
