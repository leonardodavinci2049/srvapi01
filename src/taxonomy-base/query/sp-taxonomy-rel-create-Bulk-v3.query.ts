import { escape } from 'mysql2';

import { SpTaxonomyRelCreateBulkV3Dto } from '../dto/sp-taxonomy-rel-create-Bulk-v3.dto';

export function SpTaxonomyRelCreateBulkV3Query(
  dataJsonDto: SpTaxonomyRelCreateBulkV3Dto,
): string {
  return `CALL sp_taxonomy_rel_create_Bulk_v3(
    ${escape(dataJsonDto.pe_app_id ?? 1)},
    ${escape(dataJsonDto.pe_system_client_id)},
    ${escape(dataJsonDto.pe_store_id)},
    ${escape(dataJsonDto.pe_organization_id)},
    ${escape(dataJsonDto.pe_user_id)},
    ${escape(dataJsonDto.pe_user_name)},
    ${escape(dataJsonDto.pe_user_role)},
    ${escape(dataJsonDto.pe_person_id)},
    ${escape(dataJsonDto.pe_id_taxonomy)},
    ${escape(dataJsonDto.pe_filter_keyword)},
    ${escape(dataJsonDto.pe_level)}
  )`;
}
