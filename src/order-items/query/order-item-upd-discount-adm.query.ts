import { OrderItemUpdDiscountAdmDto } from '../dto/order-item-upd-discount-adm.dto';

export function OrderItemUpdDiscountAdmQuery(
  dataJsonDto: OrderItemUpdDiscountAdmDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderItemId = dataJsonDto.pe_order_item_id;
  const olDiscountAdmValue = dataJsonDto.pe_discount_adm_value;

  const queryString = ` call sp_order_item_upd_discount_adm_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderItemId},
        ${olDiscountAdmValue}

      ) `;

  return queryString;
}
