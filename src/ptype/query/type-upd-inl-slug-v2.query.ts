import { TypeUpdInlSlugV2Dto } from '../dto/type-upd-inl-slug-v2.dto';

interface TypeUpdInlSlugV2QueryResult {
  queryString: string;
  queryParams: [
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    number | null,
    number,
    string | null,
  ];
}

export function TypeUpdInlSlugV2Query(
  dataJsonDto: TypeUpdInlSlugV2Dto,
): TypeUpdInlSlugV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olTypeId = dataJsonDto.pe_type_id;
  const olSlug = dataJsonDto.pe_slug ?? null;

  const queryString = `call sp_type_upd_inl_slug_v2(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )`;

  const queryParams: TypeUpdInlSlugV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olTypeId,
    olSlug,
  ];

  return { queryString, queryParams };
}
