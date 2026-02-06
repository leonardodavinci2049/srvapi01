import { OrdersFindSellerAllDto } from '../dto/orders-find-seller-all.dto';

export function OrdersFindSellerAllQuery(
  dataJsonDto: OrdersFindSellerAllDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSellerId = dataJsonDto.pe_seller_id;
  const olPage = dataJsonDto.page ?? 1;
  const olLimit = dataJsonDto.limit ?? 10;

  const queryString = ` call sp_orders_find_seller_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olSellerId},
        ${olPage},
        ${olLimit}

      ) `;

  return queryString;
}
