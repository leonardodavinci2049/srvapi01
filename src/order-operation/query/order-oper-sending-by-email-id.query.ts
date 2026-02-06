import { OrderOperSendingByEmailIdDto } from '../dto/order-oper-sending-by-email-id.dto';

export function OrderOperSendingByEmailIdQuery(
  dataJsonDto: OrderOperSendingByEmailIdDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olIdPedido = dataJsonDto.pe_id_pedido;
  const olIdVendedor = dataJsonDto.pe_id_vendedor;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const queryString = ` call sp_order_oper_sending_by_email_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olIdPedido},
        ${olIdVendedor},
        ${olTypeBusiness}
      ) `;

  return queryString;
}
