import { OrderItemUpdAdditionDto } from '../dto/order-item-upd-addition.dto';

export function OrderItemUpdAdditionQuery(
  dataJsonDto: OrderItemUpdAdditionDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderItemId = dataJsonDto.pe_order_item_id;
  const olAdditionValue = dataJsonDto.pe_addition_value;

  const queryString = ` call sp_order_item_upd_addition_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderItemId},
        ${olAdditionValue}

      ) `;

  return queryString;
}
