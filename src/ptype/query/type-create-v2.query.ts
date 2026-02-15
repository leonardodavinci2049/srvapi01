import { TypeCreateV2Dto } from '../dto/type-create-v2.dto';
import { v4 as UuidV4 } from 'uuid';

export function TypeCreateV2Query(dataJsonDto: TypeCreateV2Dto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olType = dataJsonDto.pe_type;
  const olSlug = dataJsonDto.pe_slug;

  const queryString = ` call sp_type_create_v2(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        '${olType}',
        '${olSlug}'
      ) `;

  return queryString;
}
