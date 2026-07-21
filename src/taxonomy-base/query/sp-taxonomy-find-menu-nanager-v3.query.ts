import { escape } from 'mysql2';

import { SpTaxonomyFindMenuNanagerV3Dto } from '../dto/sp-taxonomy-find-menu-nanager-v3.dto';

export function SpTaxonomyFindMenuNanagerV3Query(
  dataJsonDto: SpTaxonomyFindMenuNanagerV3Dto,
): string {
  return `CALL sp_taxonomy_find_menu_nanager_v3(
    ${escape(dataJsonDto.pe_app_id ?? 1)},
    ${escape(dataJsonDto.pe_system_client_id)},
    ${escape(dataJsonDto.pe_store_id)},
    ${escape(dataJsonDto.pe_organization_id)},
    ${escape(dataJsonDto.pe_user_id)},
    ${escape(dataJsonDto.pe_user_name)},
    ${escape(dataJsonDto.pe_user_role)},
    ${escape(dataJsonDto.pe_person_id)},
    ${escape(dataJsonDto.pe_limit)}
  )`;
}
