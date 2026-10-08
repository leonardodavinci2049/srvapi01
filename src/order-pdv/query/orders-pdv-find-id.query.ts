import { OrdersPdvFindIdDto } from '../dto/orders-pdv-find-id.dto';

interface OrdersPdvFindIdQueryResult {
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
  ];
}

export function OrdersPdvFindIdQuery(
  dataJsonDto: OrdersPdvFindIdDto,
): OrdersPdvFindIdQueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olSellerId = dataJsonDto.pe_seller_id;
  const olOrderId = dataJsonDto.pe_order_id;

  const queryString = `call sp_orders_pdv_find_id_v2(
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

  const queryParams: OrdersPdvFindIdQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCustomerId,
    olSellerId,
    olOrderId,
  ];

  return { queryString, queryParams };
}
