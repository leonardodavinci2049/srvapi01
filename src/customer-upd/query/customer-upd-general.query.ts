import { CustomerUpdGeneralDto } from '../dto/customer-upd-general.dto';

export function CustomerUpdGeneralQuery(
  dataJsonDto: CustomerUpdGeneralDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olName = dataJsonDto.pe_name;
  const olPhone = dataJsonDto.pe_phone;
  const olWhatsapp = dataJsonDto.pe_whatsapp;
  const olEmail = dataJsonDto.pe_email;
  const olImagePath = dataJsonDto.pe_image_path;

  const queryString = ` call sp_customer_upd_general_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        '${olName}',
        '${olPhone}',
        '${olWhatsapp}',
        '${olEmail}',
        '${olImagePath}'
      ) `;

  return queryString;
}
