import { CustomerUpdAddressDto } from '../dto/customer-upd-address.dto';

export function CustomerUpdAddressQuery(
  dataJsonDto: CustomerUpdAddressDto,
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
  const olZipCode = dataJsonDto.pe_zip_code;
  const olAddress = dataJsonDto.pe_address;
  const olAddressNumber = dataJsonDto.pe_address_number;
  const olComplement = dataJsonDto.pe_complement;
  const olNeighborhood = dataJsonDto.pe_neighborhood;
  const olCity = dataJsonDto.pe_city;
  const olState = dataJsonDto.pe_state;
  const olCityCode = dataJsonDto.pe_city_code;
  const olStateCode = dataJsonDto.pe_state_code;

  const queryString = ` call sp_customer_upd_address_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olCustomerId},
        '${olZipCode}',
        '${olAddress}',
        '${olAddressNumber}',
        '${olComplement}',
        '${olNeighborhood}',
        '${olCity}',
        '${olState}',
        '${olCityCode}',
        '${olStateCode}'
      ) `;

  return queryString;
}
