import { OrderItemUpdNotesDto } from '../dto/order-item-upd-notes.dto';

export function OrderItemUpdNotesQuery(
  dataJsonDto: OrderItemUpdNotesDto,
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
  const olNotes = dataJsonDto.pe_notes ?? '';

  const queryString = ` call sp_order_item_upd_notes_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olOrderItemId},
        '${olNotes}'

      ) `;

  return queryString;
}
