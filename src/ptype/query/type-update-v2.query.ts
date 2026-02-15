import { TypeUpdateV2Dto } from '../dto/type-update-v2.dto';

export function TypeUpdateV2Query(dataJsonDto: TypeUpdateV2Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olTypeId = dataJsonDto.pe_type_id;
  const olType = dataJsonDto.pe_type;
  const olSlug = dataJsonDto.pe_slug;
  const olNotes = dataJsonDto.pe_notes;
  const olInactive = dataJsonDto.pe_inactive;

  const queryString = ` call sp_type_update_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olTypeId},
        '${olType}',
        '${olSlug}',
        '${olNotes}',
        ${olInactive}
      ) `;

  return queryString;
}
