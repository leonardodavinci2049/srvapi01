import { CarrierCreateV2Dto } from '../dto/carrier-create-v2.dto';
import { v4 as UuidV4 } from 'uuid';

export function CarrierCreateV2Query(dataJsonDto: CarrierCreateV2Dto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olTypePersonId = dataJsonDto.pe_type_person_id;
  const olName = dataJsonDto.pe_name;
  const olPhone = dataJsonDto.pe_phone;
  const olWhatsapp = dataJsonDto.pe_whatsapp;
  const olEmail = dataJsonDto.pe_email;
  const olWebsite = dataJsonDto.pe_website;
  const olCnpj = dataJsonDto.pe_cnpj;
  const olCompanyName = dataJsonDto.pe_company_name;
  const olResponsibleName = dataJsonDto.pe_responsible_name;
  const olCpf = dataJsonDto.pe_cpf;
  const olImagePath = dataJsonDto.pe_image_path;

  const queryString = ` call sp_carrier_create_v2(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olTypePersonId},
        '${olName}',
        '${olPhone}',
        '${olWhatsapp}',
        '${olEmail}',
        '${olWebsite}',
        '${olCnpj}',
        '${olCompanyName}',
        '${olResponsibleName}',
        '${olCpf}',
        '${olImagePath}'
      ) `;

  return queryString;
}
