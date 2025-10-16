import { TaxonomyFindMenuDto } from '../dto/taxonomy-find-menu.dto';

export function findTaxonomyMenuQuery(
  dataJsonDto: TaxonomyFindMenuDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTipo = dataJsonDto.pe_id_tipo;
  const olParentId = dataJsonDto.pe_parent_id;

  const queryString = ` call sp_taxonomy_find_menu_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTipo},
        ${olParentId}
      ) `;

  return queryString;
}
