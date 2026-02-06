import { OrderOperAddItemDto } from '../dto/order-oper-add-item.dto';

export function OrderOperAddItemQuery(
  dataJsonDto: OrderOperAddItemDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderOperationId = dataJsonDto.pe_order_operation_id;
  const olProductId = dataJsonDto.pe_product_id;

  const queryString = ` call sp_order_oper_add_item_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderOperationId},
        ${olProductId}

      ) `;

  return queryString;
}
