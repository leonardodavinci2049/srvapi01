import { TaxonomyFindIdDto } from '../dto/taxonomy-find-id.dto';

export function findTaxonomyIdQuery(dataJsonDto: TaxonomyFindIdDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy;
  const olSlugTaxonomy = dataJsonDto.pe_slug_taxonomy;

  const queryString = ` call sp_taxonomy_find_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTaxonomy},
        '${olSlugTaxonomy}'
      ) `;

  return queryString;
}
