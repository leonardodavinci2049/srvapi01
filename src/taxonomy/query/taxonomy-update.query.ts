import { TaxonomyUpdateDto } from '../dto/taxonomy-update.dto';

export function updateTaxonomyQuery(dataJsonDto: TaxonomyUpdateDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy;
  const olParentId = dataJsonDto.pe_parent_id;
  const olTaxonomia = dataJsonDto.pe_taxonomia;
  const olSlug = dataJsonDto.pe_slug;
  const olPathImagem = dataJsonDto.pe_path_imagem;
  const olOrdem = dataJsonDto.pe_ordem;
  const olMetaTitle = dataJsonDto.pe_meta_title;
  const olMetaDescription = dataJsonDto.pe_meta_description;
  const olInativo = dataJsonDto.pe_inativo;
  const olInfo = dataJsonDto.pe_info;

  const queryString = ` call sp_taxonomy_update_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTaxonomy},
        ${olParentId},
        '${olTaxonomia}',
        '${olSlug}',
        '${olPathImagem}',
        ${olOrdem},
        '${olMetaTitle}',
        '${olMetaDescription}',
        ${olInativo},
        '${olInfo}'
      ) `;

  return queryString;
}
