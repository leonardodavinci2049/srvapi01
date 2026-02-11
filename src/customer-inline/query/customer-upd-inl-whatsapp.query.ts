import { CustomerUpdInlWhatsappDto } from '../dto/customer-upd-inl-whatsapp.dto';

export function CustomerUpdInlWhatsappQuery(
  dataJsonDto: CustomerUpdInlWhatsappDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olWhatsapp1 = dataJsonDto.pe_whatsapp1;

  const queryString = ` call sp_customer_upd_inl_whatsapp_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        '${olWhatsapp1}'

      ) `;

  return queryString;
}
