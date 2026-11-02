import { OrdersPdvFindQtDto } from '../dto/orders-pdv-find-qt.dto';

interface OrdersPdvFindQtQueryResult {
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
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    string,
    string,
  ];
}

export function OrdersPdvFindQtQuery(
  data: OrdersPdvFindQtDto,
): OrdersPdvFindQtQueryResult {
  const olAppId = data.pe_app_id;
  const olSystemClientId = data.pe_system_client_id;
  const olStoreId = data.pe_store_id;
  const olOrganizationId = data.pe_organization_id;
  const olUserId = data.pe_user_id;
  const olUserName = data.pe_user_name;
  const olUserRole = data.pe_user_role;
  const olPersonId = data.pe_person_id ?? null;
  const olCustomerId = data.pe_customer_id ?? null;
  const olSellerId = data.pe_seller_id ?? null;
  const olOrderStatusId = data.pe_order_status_id ?? null;
  const olFinancialStatusId = data.pe_financial_status_id ?? null;
  const olDeliveryStatusId = data.pe_delivery_status_id ?? null;
  const olLocationId = data.pe_location_id ?? null;
  const olStartDate = data.pe_start_date;
  const olEndDate = data.pe_end_date;

  const queryString =
    'call sp_orders_pdv_find_qt_v2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const queryParams: OrdersPdvFindQtQueryResult['queryParams'] = [
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
    olOrderStatusId,
    olFinancialStatusId,
    olDeliveryStatusId,
    olLocationId,
    olStartDate,
    olEndDate,
  ];
  return { queryString, queryParams };
}
