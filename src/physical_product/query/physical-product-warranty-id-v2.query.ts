import { PhysicalProductWarrantyIdV2Dto } from '../dto/physical-product-warranty-id-v2.dto';

export function PhysicalProductWarrantyIdV2Query(
  dataJsonDto: PhysicalProductWarrantyIdV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olPhysicalId = dataJsonDto.pe_physical_id;

  const queryString = ` call sp_physical_product_warranty_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        ${olPhysicalId}
      ) `;

  return queryString;
}
