import { EntryItemUpdProductPriceDto } from '../dto/entry-item-upd-product-price.dto';

interface EntryItemUpdProductPriceQueryResult {
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
  ];
}

export function EntryItemUpdProductPriceQuery(
  dataJsonDto: EntryItemUpdProductPriceDto,
): EntryItemUpdProductPriceQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olItemMovementId = dataJsonDto.pe_item_movement_id;
  const olPrecoVendaAtac = dataJsonDto.pe_preco_venda_atac;
  const olPrecoVendaCorporativo = dataJsonDto.pe_preco_venda_corporativo;
  const olPrecoVendaVare = dataJsonDto.pe_preco_venda_vare;

  const queryString = `call sp_entry_item_upd_product_price_v2(
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

  const queryParams: EntryItemUpdProductPriceQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olItemMovementId,
    olPrecoVendaAtac,
    olPrecoVendaCorporativo,
    olPrecoVendaVare,
  ];

  return { queryString, queryParams };
}
