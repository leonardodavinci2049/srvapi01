import { TaxonomyUpdInactiveDto } from '../dto/taxonomy-upd-inactive.dto';

export function taxonomyUpdInactiveQuery(
  dataJsonDto: TaxonomyUpdInactiveDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy;
  const olInativo = dataJsonDto.pe_inactive;

  const queryString = ` call sp_taxonomy_upd_inactive_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTaxonomy} 
        ,${olInativo}
      ) `;

  return queryString;
}
