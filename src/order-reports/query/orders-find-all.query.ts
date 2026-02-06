import { OrdersFindAllDto } from '../dto/orders-find-all.dto';

export function OrdersFindAllQuery(dataJsonDto: OrdersFindAllDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olPage = dataJsonDto.page ?? 1;
  const olLimit = dataJsonDto.limit ?? 10;

  const queryString = ` call sp_orders_find_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olPage},
        ${olLimit}

      ) `;

  return queryString;
}
