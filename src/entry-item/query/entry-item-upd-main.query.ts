import { EntryItemUpdMainDto } from '../dto/entry-item-upd-main.dto';

interface EntryItemUpdMainQueryResult {
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
  ];
}

export function EntryItemUpdMainQuery(
  dataJsonDto: EntryItemUpdMainDto,
): EntryItemUpdMainQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;
  const olQtComprada = dataJsonDto.pe_qt_comprada;
  const olQtRecebida = dataJsonDto.pe_qt_recebida;
  const olVlUnitReal = dataJsonDto.pe_vl_unit_real;
  const olVlFreteReal = dataJsonDto.pe_vl_frete_real;
  const olVlNota = dataJsonDto.pe_vl_nota;

  const queryString = `call sp_entry_item_upd_main_v2(
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

  const queryParams: EntryItemUpdMainQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
    olQtComprada,
    olQtRecebida,
    olVlUnitReal,
    olVlFreteReal,
    olVlNota,
  ];

  return { queryString, queryParams };
}
