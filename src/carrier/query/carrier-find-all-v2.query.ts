import { CarrierFindAllV2Dto } from '../dto/carrier-find-all-v2.dto';

export function CarrierFindAllV2Query(
  dataJsonDto: CarrierFindAllV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olName = dataJsonDto.pe_name;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_carrier_find_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        ${olCarrierId},
        '${olName}',
        ${olLimit}
      ) `;

  return queryString;
}
