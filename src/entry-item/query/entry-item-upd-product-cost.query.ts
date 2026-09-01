import { EntryItemUpdProductCostDto } from '../dto/entry-item-upd-product-cost.dto';

interface EntryItemUpdProductCostQueryResult {
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

export function EntryItemUpdProductCostQuery(
  dataJsonDto: EntryItemUpdProductCostDto,
): EntryItemUpdProductCostQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;
  const olVlCusto = dataJsonDto.pe_vl_custo;

  const queryString = `call sp_entry_item_upd_product_cost_v2(
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

  const queryParams: EntryItemUpdProductCostQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
    olVlCusto,
  ];

  return { queryString, queryParams };
}
