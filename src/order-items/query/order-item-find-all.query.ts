import { OrderItemFindAllDto } from '../dto/order-item-find-all.dto';

export function OrderItemFindAllQuery(
  dataJsonDto: OrderItemFindAllDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id ?? null;
  const olPage = dataJsonDto.page ?? 1;
  const olLimit = dataJsonDto.limit ?? 10;

  const queryString = ` call sp_order_item_find_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderId},
        ${olPage},
        ${olLimit}

      ) `;

  return queryString;
}
