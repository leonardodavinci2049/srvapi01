import { OrderFindDashboardCustomerIdV2Dto } from '../dto/order-find-dashboard-customer-id-v2.dto';

export function OrderFindDashboardCustomerIdV2Query(
  dataJsonDto: OrderFindDashboardCustomerIdV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id;
  const olCustomerId = dataJsonDto.pe_customer_id;

  const queryString = ` call sp_order_find_dashboard_customer_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olOrderId},
        ${olCustomerId}
      ) `;

  return queryString;
}
