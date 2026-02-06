import { OrdersFindIdDto } from '../dto/orders-find-id.dto';

export function OrdersFindIdQuery(dataJsonDto: OrdersFindIdDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olIdPedido = dataJsonDto.pe_id_pedido;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const queryString = ` call sp_orders_find_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olIdPedido},
        ${olTypeBusiness}
      ) `;

  return queryString;
}
