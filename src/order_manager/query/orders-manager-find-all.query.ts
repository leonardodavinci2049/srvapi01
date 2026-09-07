import { OrdersManagerFindAllDto } from '../dto/orders-manager-find-all.dto';

interface OrdersManagerFindAllQueryResult {
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
    number | null,
    string,
    string,
    number | null,
    number | null,
    number | null,
    number | null,
  ];
}

export function OrdersManagerFindAllQuery(
  dataJsonDto: OrdersManagerFindAllDto,
): OrdersManagerFindAllQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olOrderId = dataJsonDto.pe_order_id ?? null;
  const olCustomerId = dataJsonDto.pe_customer_id ?? null;
  const olSellerId = dataJsonDto.pe_seller_id ?? null;
  const olOrderStatusId = dataJsonDto.pe_order_status_id ?? null;
  const olFinancialStatusId = dataJsonDto.pe_financial_status_id ?? null;
  const olDeliveryStatusId = dataJsonDto.pe_delivery_status_id ?? null;
  const olLocationId = dataJsonDto.pe_location_id ?? null;
  const olStartDate = dataJsonDto.pe_start_date;
  const olEndDate = dataJsonDto.pe_end_date;
  const olRecordsPerPage = dataJsonDto.pe_records_per_page ?? null;
  const olPageId = dataJsonDto.pe_page_id ?? null;
  const olSortColumnId = dataJsonDto.pe_sort_column_id ?? null;
  const olSortOrderId = dataJsonDto.pe_sort_order_id ?? null;

  const queryString = `call sp_orders_manager_find_all_v2(
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

  const queryParams: OrdersManagerFindAllQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olOrderId,
    olCustomerId,
    olSellerId,
    olOrderStatusId,
    olFinancialStatusId,
    olDeliveryStatusId,
    olLocationId,
    olStartDate,
    olEndDate,
    olRecordsPerPage,
    olPageId,
    olSortColumnId,
    olSortOrderId,
  ];

  return { queryString, queryParams };
}
