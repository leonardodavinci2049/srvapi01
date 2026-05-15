import { OrdersFindCartIdDto } from '../dto/orders-find-cart-id.dto';

export function OrdersFindCartIdQuery(
  dataJsonDto: OrdersFindCartIdDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id;
  const olCustomerId = dataJsonDto.pe_id_customer;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const queryString = ` call sp_orders_find_cart_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olOrderId},
        ${olCustomerId},
        ${olTypeBusiness}

      ) `;

  // console.log('queryString', queryString);

  return queryString;
}
