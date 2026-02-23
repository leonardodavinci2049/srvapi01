import { OrderUpdStatusIdDto } from '../dto/order-upd-status-id.dto';

export function OrderUpdStatusIdQuery(
  dataJsonDto: OrderUpdStatusIdDto,
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
  const olStatusId = dataJsonDto.pe_status_id;

  const queryString = ` call sp_order_upd_status_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olOrderId},
        ${olStatusId}

      ) `;

  return queryString;
}
