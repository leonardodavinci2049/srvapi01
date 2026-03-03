import { TaxonomyCreateV3Dto } from '../dto/taxonomy-create-v3.dto';
import { v4 as UuidV4 } from 'uuid';

export function TaxonomyCreateV3Query(
  dataJsonDto: TaxonomyCreateV3Dto,
): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const queryString = ` call sp_taxonomy_create_v3(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId}
      ) `;

  return queryString;
}
