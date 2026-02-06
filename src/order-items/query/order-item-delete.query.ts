import { OrderItemDeleteDto } from '../dto/order-item-delete.dto';

export function OrderItemDeleteQuery(dataJsonDto: OrderItemDeleteDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olUserName = dataJsonDto.pe_nome_usuario;
  const olMovementId = dataJsonDto.pe_id_movimento;

  const queryString = ` call sp_order_item_delete_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        '${olUserName}',
        ${olMovementId}

      ) `;

  return queryString;
}
