import { OrderUpdPgMethodIdDto } from '../dto/order-upd-pg-method-id.dto';

export function OrderUpdPgMethodIdQuery(
  dataJsonDto: OrderUpdPgMethodIdDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id;
  const olPgMethodId = dataJsonDto.pe_pg_method_id;

  const queryString = ` call sp_order_upd_pg_method_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderId},
        ${olPgMethodId}

      ) `;

  return queryString;
}
