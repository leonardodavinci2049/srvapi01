import { TaxonomyDeleteDto } from '../dto/taxonomy-delete.dto';

export function deleteTaxonomyQuery(dataJsonDto: TaxonomyDeleteDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy;

  const queryString = ` call sp_taxonomy_delete_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTaxonomy}
      ) `;

  return queryString;
}
