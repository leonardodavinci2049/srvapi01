import { BrandFindAllDto } from '../dto/brand-find-all.dto';

export function BrandFindAllQuery(dataJsonDto: BrandFindAllDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdMarca = dataJsonDto.pe_brand_id;
  const olMarca = dataJsonDto.pe_brand;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_brand_sel_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olIdMarca},
        '${olMarca}',
        ${olLimit},  



      ) `;

  return queryString;
}
