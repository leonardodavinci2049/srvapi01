import { TaxonomyCreateDto } from '../dto/taxonomy-create.dto';
import { v4 as UuidV4 } from 'uuid';

export function createTaxonomyQuery(dataJsonDto: TaxonomyCreateDto): string {
  const OlUuid = UuidV4();

  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTipo = dataJsonDto.pe_id_tipo;
  const olParentId = dataJsonDto.pe_parent_id;
  const olTaxonomia = dataJsonDto.pe_taxonomia;
  const olSlug = dataJsonDto.pe_slug;
  const olLevel = dataJsonDto.pe_level;

  const queryString = ` call sp_taxonomy_create_v2(
       '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTipo},
        ${olParentId},
        '${olTaxonomia}',
        '${olSlug}',
        ${olLevel}
      ) `;

  return queryString;
}
