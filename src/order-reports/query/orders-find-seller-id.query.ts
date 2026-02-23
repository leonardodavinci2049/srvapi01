import { OrdersFindSellerIdDto } from '../dto/orders-find-seller-id.dto';

export function OrdersFindSellerIdQuery(
  dataJsonDto: OrdersFindSellerIdDto,
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
  const olSellerId = dataJsonDto.pe_seller_id;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const queryString = ` call sp_orders_find_seller_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olOrderId},
        ${olSellerId},
        ${olTypeBusiness}
      ) `;

  return queryString;
}
