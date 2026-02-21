import { BrandFindAllV2Dto } from '../dto/brand-find-all-v2.dto';

export function BrandFindAllV2Query(dataJsonDto: BrandFindAllV2Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 0;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olBrandId = dataJsonDto.pe_brand_id;
  const olBrand = dataJsonDto.pe_brand;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_brand_find_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olBrandId},
        '${olBrand}',
        ${olLimit}      ) `;
        
  return queryString;
}
