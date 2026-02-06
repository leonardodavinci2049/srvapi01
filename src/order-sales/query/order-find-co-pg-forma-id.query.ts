import { OrderFindCoPgFormaIdDto } from '../dto/order-find-co-pg-forma-id.dto';

export function OrderFindCoPgFormaIdQuery(
  dataJsonDto: OrderFindCoPgFormaIdDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olOrderId = dataJsonDto.pe_order_id;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const queryString = ` call sp_order_find_co_pg_forma_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olOrderId},
        ${olTypeBusiness}

      ) `;

  return queryString;
}
