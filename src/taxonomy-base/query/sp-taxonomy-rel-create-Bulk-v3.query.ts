import { SpTaxonomyRelCreateBulkV3Dto } from '../dto/sp-taxonomy-rel-create-Bulk-v3.dto';

export function SpTaxonomyRelCreateBulkV3Query(
  dataJsonDto: SpTaxonomyRelCreateBulkV3Dto,
): { queryString: string; queryParams: (string | number | null)[] } {
  const queryParams = [
    dataJsonDto.pe_app_id ?? 1,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_organization_id,
    dataJsonDto.pe_user_id,
    dataJsonDto.pe_user_name,
    dataJsonDto.pe_user_role,
    dataJsonDto.pe_person_id ?? null,
    dataJsonDto.pe_id_taxonomy,
    dataJsonDto.pe_eligibility_version === 1
      ? dataJsonDto.pe_filter_keyword.trim()
      : dataJsonDto.pe_filter_keyword,
  ];
  if (dataJsonDto.pe_eligibility_version === 1) {
    return {
      queryString:
        'CALL sp_taxonomy_rel_create_candidates_bulk_v3(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      queryParams,
    };
  }
  return {
    queryString:
      'CALL sp_taxonomy_rel_create_Bulk_v3(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    queryParams: [...queryParams, dataJsonDto.pe_level ?? null],
  };
}
