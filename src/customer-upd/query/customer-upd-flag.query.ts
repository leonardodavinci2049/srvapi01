import { CustomerUpdFlagDto } from '../dto/customer-upd-flag.dto';

export function CustomerUpdFlagQuery(dataJsonDto: CustomerUpdFlagDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olClient = dataJsonDto.pe_client;
  const olSeller = dataJsonDto.pe_seller;
  const olSupplier = dataJsonDto.pe_supplier;
  const olProfessional = dataJsonDto.pe_professional;
  const olEmployee = dataJsonDto.pe_employee;
  const olRestriction = dataJsonDto.pe_restriction;

  const queryString = ` call sp_customer_upd_flag_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        ${olClient},
        ${olSeller},
        ${olSupplier},
        ${olProfessional},
        ${olEmployee},
        ${olRestriction}
      ) `;

  return queryString;
}
