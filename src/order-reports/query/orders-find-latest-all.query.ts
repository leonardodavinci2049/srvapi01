import { OrdersFindLatestAllDto } from '../dto/orders-find-latest-all.dto';

export function OrdersFindLatestAllQuery(
  dataJsonDto: OrdersFindLatestAllDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olSellerId = dataJsonDto.pe_seller_id;
  const olOrderStatusId = dataJsonDto.pe_order_status_id;
  const olFinancialStatusId = dataJsonDto.pe_financial_status_id;
  const olLocationId = dataJsonDto.pe_location_id;
  const olInitialDate = dataJsonDto.pe_initial_date
    ? new Date(dataJsonDto.pe_initial_date).toISOString().split('T')[0]
    : null;
  const olFinalDate = dataJsonDto.pe_final_date
    ? new Date(dataJsonDto.pe_final_date).toISOString().split('T')[0]
    : null;

  const olLimit = dataJsonDto.pe_limit ?? 100;

  const queryString = ` call sp_orders_find_latest_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderId},
        ${olCustomerId},
        ${olSellerId},
        ${olOrderStatusId},
        ${olFinancialStatusId},
        ${olLocationId},
        ${olInitialDate ? `'${olInitialDate}'` : 'NULL'},
        ${olFinalDate ? `'${olFinalDate}'` : 'NULL'},
        ${olLimit}
      ) `;

  return queryString;
}
