import { CarrierUpdateV2Dto } from '../dto/carrier-update-v2.dto';

export function CarrierUpdateV2Query(dataJsonDto: CarrierUpdateV2Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olTypePersonId = dataJsonDto.pe_type_person_id;
  const olCarrierName = dataJsonDto.pe_carrier_name;
  const olPhone = dataJsonDto.pe_phone;
  const olWhatsapp = dataJsonDto.pe_whatsapp;
  const olEmail = dataJsonDto.pe_email;
  const olWebsite = dataJsonDto.pe_website;
  const olCnpj = dataJsonDto.pe_cnpj;
  const olCompanyName = dataJsonDto.pe_company_name;
  const olResponsibleName = dataJsonDto.pe_responsible_name;
  const pe_cpf = dataJsonDto.pe_cpf;
  const pe_image_path = dataJsonDto.pe_image_path;
  const pe_notes = dataJsonDto.pe_notes;

  const queryString = ` call sp_carrier_update_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCarrierId},
        ${olTypePersonId},
        '${olCarrierName}',
        '${olPhone}',
        '${olWhatsapp}',
        '${olEmail}',
        '${olWebsite}',
        '${olCnpj}',
        '${olCompanyName}',
        '${olResponsibleName}',
        '${pe_cpf}',
        '${pe_image_path}',
        '${pe_notes}'
      ) `;

  return queryString;
}
