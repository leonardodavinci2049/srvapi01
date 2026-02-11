import { CustomerUpdPersonalDto } from '../dto/customer-upd-personal.dto';

export function CustomerUpdPersonalQuery(
  dataJsonDto: CustomerUpdPersonalDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olCpf = dataJsonDto.pe_cpf;
  const olFirstName = dataJsonDto.pe_first_name;
  const olLastName = dataJsonDto.pe_last_name;
  const olImagePath = dataJsonDto.pe_image_path;
  const olBirthDate = dataJsonDto.pe_birth_date;

  const queryString = ` call sp_customer_upd_personal_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        '${olCpf}',
        '${olFirstName}',
        '${olLastName}',
        '${olImagePath}',
        '${olBirthDate}'
      ) `;

  return queryString;
}
