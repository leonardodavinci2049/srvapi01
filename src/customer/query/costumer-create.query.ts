import { CostumerCreateDto } from '../dto/costumer-create.dto';
import { v4 as UuidV4 } from 'uuid';
export function CostumerCreateQuery(dataJsonDto: CostumerCreateDto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olName = dataJsonDto.pe_name;
  const olEmail = dataJsonDto.pe_email;
  const olPersonTypeId = dataJsonDto.pe_person_type_id;
  const olCnpj = dataJsonDto.pe_cnpj;
  const olCompanyName = dataJsonDto.pe_company_name;
  const olCpf = dataJsonDto.pe_cpf;
  const olPhone = dataJsonDto.pe_phone;
  const olWhatsapp = dataJsonDto.pe_whatsapp;
  const olImage = dataJsonDto.pe_image;
  const olZipCode = dataJsonDto.pe_zip_code;
  const olAddress = dataJsonDto.pe_address;
  const olAddressNumber = dataJsonDto.pe_address_number;
  const olComplement = dataJsonDto.pe_complement;
  const olNeighborhood = dataJsonDto.pe_neighborhood;
  const olCity = dataJsonDto.pe_city;
  const olState = dataJsonDto.pe_state;
  const olNotes = dataJsonDto.pe_notes;

  const queryString = ` call sp_costumer_create_v2(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        '${olUserName}',
        '${olName}',
        '${olEmail}',
        ${olPersonTypeId},
        '${olCnpj}',
        '${olCompanyName}',
        '${olCpf}',
        '${olPhone}',
        '${olWhatsapp}',
        '${olImage}',
        '${olZipCode}',
        '${olAddress}',
        '${olAddressNumber}',
        '${olComplement}',
        '${olNeighborhood}',
        '${olCity}',
        '${olState}',
        '${olNotes}'
      ) `;

  return queryString;
}
