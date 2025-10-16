import { TaxonomyFindDto } from '../dto/taxonomy-find.dto';

export function findTaxonomyQuery(dataJsonDto: TaxonomyFindDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdParent = dataJsonDto.pe_id_parent;
  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy;
  const olTaxonomia = dataJsonDto.pe_taxonomia;
  const olFlagInativo = dataJsonDto.pe_flag_inativo;
  const olQtRegistros = dataJsonDto.pe_qt_registros;
  const olPaginaId = dataJsonDto.pe_pagina_id;
  const olColunaId = dataJsonDto.pe_coluna_id;
  const olOrdemId = dataJsonDto.pe_ordem_id;

  const queryString = ` call sp_taxonomy_find_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdParent},
        ${olIdTaxonomy},
        '${olTaxonomia}',
        ${olFlagInativo},
        ${olQtRegistros},
        ${olPaginaId},
        ${olColunaId},
        ${olOrdemId}
      ) `;

  return queryString;
}
