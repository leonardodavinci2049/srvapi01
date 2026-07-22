import { escape } from 'mysql2';
import { SpTaxonomyFindMenuManagerV3Dto } from '../dto/sp-taxonomy-find-menu-manager-v3.dto';


export function SpTaxonomyFindMenuManagerV3Query(
  dataJsonDto: SpTaxonomyFindMenuManagerV3Dto,
): string {
  return `CALL sp_taxonomy_find_menu_manager_v3(
    ${escape(dataJsonDto.pe_app_id ?? 1)},
    ${escape(dataJsonDto.pe_system_client_id)},
    ${escape(dataJsonDto.pe_store_id)},
    ${escape(dataJsonDto.pe_organization_id)},
    ${escape(dataJsonDto.pe_user_id)},
    ${escape(dataJsonDto.pe_user_name)},
    ${escape(dataJsonDto.pe_user_role)},
    ${escape(dataJsonDto.pe_person_id)},
    ${escape(dataJsonDto.pe_flag_status)},
    ${escape(dataJsonDto.pe_flag_operation)},
    ${escape(dataJsonDto.pe_limit)}
  )`;
}
