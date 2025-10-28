import { TypeFindAllDto } from '../dto/type-find-all.dto';

export function TypeFindAllQuery(dataJsonDto: TypeFindAllDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdTipo = dataJsonDto.pe_id_tipo;
  const olTipo = dataJsonDto.pe_tipo;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_type_sel_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdTipo},
        '${olTipo}',
        ${olLimit}

      ) `;

  return queryString;
}
