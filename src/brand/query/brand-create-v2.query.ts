import { BrandCreateV2Dto } from '../dto/brand-create-v2.dto';
import { v4 as UuidV4 } from 'uuid';

export function BrandCreateV2Query(dataJsonDto: BrandCreateV2Dto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olBrand = dataJsonDto.pe_brand;
  const olSlug = dataJsonDto.pe_slug;

  const queryString = ` call sp_brand_create_v2(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        '${olBrand}',
        '${olSlug}'
      ) `;


  console.log('queryString', queryString);


  return queryString;
}
