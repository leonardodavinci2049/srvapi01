import { EntryItemUpdTaxCodesDto } from '../dto/entry-item-upd-tax-codes.dto';

interface EntryItemUpdTaxCodesQueryResult {
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
    string,
  ];
}

export function EntryItemUpdTaxCodesQuery(
  dataJsonDto: EntryItemUpdTaxCodesDto,
): EntryItemUpdTaxCodesQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;
  const olCst = dataJsonDto.pe_cst;
  const olCfop = dataJsonDto.pe_cfop;
  const olNcm = dataJsonDto.pe_ncm;

  const queryString = `call sp_entry_item_upd_tax_codes_v2(
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

  const queryParams: EntryItemUpdTaxCodesQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
    olCst,
    olCfop,
    olNcm,
  ];

  return { queryString, queryParams };
}
