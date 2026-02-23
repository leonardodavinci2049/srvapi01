import { CustomerUpdInlTypeCustomerDto } from '../dto/customer-upd-inl-type-customer.dto';

export function CustomerUpdInlTypeCustomerQuery(
  dataJsonDto: CustomerUpdInlTypeCustomerDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olCustomerTypeId = dataJsonDto.pe_customer_type_id;

  const queryString = ` call sp_customer_upd_inl_type_customer_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olCustomerId},
        ${olCustomerTypeId}

      ) `;

  return queryString;
}
