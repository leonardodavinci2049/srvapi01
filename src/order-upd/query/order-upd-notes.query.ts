import { OrderUpdNotesDto } from '../dto/order-upd-notes.dto';

export function OrderUpdNotesQuery(dataJsonDto: OrderUpdNotesDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id;
  const olNotes = dataJsonDto.pe_notes ?? '';

  const queryString = ` call sp_order_upd_notes_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderId},
        '${olNotes}'

      ) `;

  return queryString;
}
