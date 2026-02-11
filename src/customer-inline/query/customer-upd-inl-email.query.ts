import { CustomerUpdInlEmailDto } from '../dto/customer-upd-inl-email.dto';

export function CustomerUpdInlEmailQuery(
  dataJsonDto: CustomerUpdInlEmailDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const queryString = ` call sp_customer_upd_inl_email(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId}

      ) `;

  return queryString;
}
