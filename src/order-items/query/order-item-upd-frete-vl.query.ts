import { OrderItemUpdFreteVlDto } from '../dto/order-item-upd-frete-vl.dto';

export function OrderItemUpdFreteVlQuery(
  dataJsonDto: OrderItemUpdFreteVlDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderItemId = dataJsonDto.pe_order_item_id;
  const olFreteValue = dataJsonDto.pe_frete_value;

  const queryString = ` call sp_order_item_upd_frete_vl_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olOrderItemId},
        ${olFreteValue}

      ) `;

  return queryString;
}
