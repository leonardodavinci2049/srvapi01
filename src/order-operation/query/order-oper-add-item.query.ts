import { OrderOperAddItemDto } from '../dto/order-oper-add-item.dto';
import { v4 as UuidV4 } from 'uuid';

export function OrderOperAddItemQuery(
  dataJsonDto: OrderOperAddItemDto,
): string {
  const OlUuid = UuidV4();
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
  const olPaymentFormId = dataJsonDto.pe_payment_form_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olProductQuantity = dataJsonDto.pe_product_quantity;
  const olBusinessType = dataJsonDto.pe_business_type;
  const olNotes = dataJsonDto.pe_notes;

  const queryString = ` call sp_order_oper_add_item_v2(
        '${OlUuid}',
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
        ${olPaymentFormId},
        ${olProductId},
        ${olProductQuantity},
        ${olBusinessType},
        '${olNotes.replace(/'/g, "''")}'
      ) `;

  return queryString;
}
