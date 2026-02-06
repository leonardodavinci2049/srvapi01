import { OrderOperCreateDto } from '../dto/order-oper-create.dto';

export function OrderOperCreateQuery(dataJsonDto: OrderOperCreateDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olIdVendedor = dataJsonDto.pe_id_vendedor;
  const olTypeBusiness = dataJsonDto.pe_type_business;
  const olIdPgForma = dataJsonDto.pe_id_pg_forma;
  const olIdLocation = dataJsonDto.pe_id_location;
  const olObservacoes = dataJsonDto.pe_observacoes;

  const queryString = ` call sp_order_oper_create_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        ${olIdVendedor},
        ${olTypeBusiness},
        ${olIdPgForma},
        ${olIdLocation},
        '${olObservacoes}'
      ) `;

  return queryString;
}
