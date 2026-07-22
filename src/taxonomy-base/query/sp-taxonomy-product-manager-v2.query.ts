import { escape } from 'mysql2';

import { SpTaxonomyProductManagerV2Dto } from '../dto/sp-taxonomy-product-manager-v2.dto';

export function SpTaxonomyProductManagerV2Query(
  dataJsonDto: SpTaxonomyProductManagerV2Dto,
): string {
  return `CALL sp_taxonomy_product_manager_v2(
    ${escape(dataJsonDto.pe_app_id ?? 1)},
    ${escape(dataJsonDto.pe_system_client_id)},
    ${escape(dataJsonDto.pe_store_id)},
    ${escape(dataJsonDto.pe_organization_id)},
    ${escape(dataJsonDto.pe_user_id)},
    ${escape(dataJsonDto.pe_user_name)},
    ${escape(dataJsonDto.pe_user_role)},
    ${escape(dataJsonDto.pe_person_id)},
    ${escape(dataJsonDto.pe_search ?? '')},
    ${escape(dataJsonDto.pe_id_taxonomy)},
    ${escape(dataJsonDto.pe_flag_no_family)},
    ${escape(dataJsonDto.pe_flag_no_group)},
    ${escape(dataJsonDto.pe_flag_no_subgroup)},
    ${escape(dataJsonDto.pe_qt_registros)},
    ${escape(dataJsonDto.pe_pagina_id)},
    ${escape(dataJsonDto.pe_coluna_id)},
    ${escape(dataJsonDto.pe_ordem_id)}
  )`;
}
