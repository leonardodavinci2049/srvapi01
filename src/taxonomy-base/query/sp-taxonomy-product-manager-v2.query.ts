import { SpTaxonomyProductManagerV2Dto } from '../dto/sp-taxonomy-product-manager-v2.dto';

export function SpTaxonomyProductManagerV2Query(
  dataJsonDto: SpTaxonomyProductManagerV2Dto,
): { queryString: string; queryParams: (string | number | null)[] } {
  const context = [
    dataJsonDto.pe_app_id ?? 1,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_organization_id,
    dataJsonDto.pe_user_id,
    dataJsonDto.pe_user_name,
    dataJsonDto.pe_user_role,
    dataJsonDto.pe_person_id ?? null,
  ];
  if (dataJsonDto.pe_exclude_taxonomy_id != null) {
    return {
      queryString:
        'CALL sp_taxonomy_product_candidates_v3(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      queryParams: [
        ...context,
        dataJsonDto.pe_search?.trim() ?? '',
        dataJsonDto.pe_exclude_taxonomy_id,
        dataJsonDto.pe_qt_registros,
        dataJsonDto.pe_pagina_id,
        dataJsonDto.pe_coluna_id,
        dataJsonDto.pe_ordem_id,
      ],
    };
  }
  return {
    queryString:
      'CALL sp_taxonomy_product_manager_v2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    queryParams: [
      ...context,
      dataJsonDto.pe_search ?? '',
      dataJsonDto.pe_id_taxonomy,
      dataJsonDto.pe_flag_no_family,
      dataJsonDto.pe_flag_no_group,
      dataJsonDto.pe_flag_no_subgroup,
      dataJsonDto.pe_qt_registros,
      dataJsonDto.pe_pagina_id,
      dataJsonDto.pe_coluna_id,
      dataJsonDto.pe_ordem_id,
    ],
  };
}
