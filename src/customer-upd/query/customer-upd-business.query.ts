import { CustomerUpdBusinessDto } from '../dto/customer-upd-business.dto';

export function CustomerUpdBusinessQuery(
  dataJsonDto: CustomerUpdBusinessDto,
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
  const olCnpj = dataJsonDto.pe_cnpj;
  const olCompanyName = dataJsonDto.pe_company_name;
  const olStateRegistration = dataJsonDto.pe_state_registration;
  const olMunicipalRegistration = dataJsonDto.pe_municipal_registration;
  const olResponsibleName = dataJsonDto.pe_responsible_name;
  const olMainActivity = dataJsonDto.pe_main_activity;

  const queryString = ` call sp_customer_upd_business_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olCustomerId},
        '${olCnpj}',
        '${olCompanyName}',
        '${olStateRegistration}',
        '${olMunicipalRegistration}',
        '${olResponsibleName}',
        '${olMainActivity}'
      ) `;

  return queryString;
}
