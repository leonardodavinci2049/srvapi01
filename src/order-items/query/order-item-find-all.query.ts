import { OrderItemFindAllDto } from '../dto/order-item-find-all.dto';

export function OrderItemFindAllQuery(
  dataJsonDto: OrderItemFindAllDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id ?? null;
  const olLimit = dataJsonDto.pe_limit ?? 10;

  const queryString = ` call sp_order_item_find_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olOrderId},
        ${olLimit}

      ) `;

  return queryString;
}
