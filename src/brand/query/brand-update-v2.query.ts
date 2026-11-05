import { BrandUpdateV2Dto } from '../dto/brand-update-v2.dto';

export function BrandUpdateV2Query(dataJsonDto: BrandUpdateV2Dto) {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olBrandId = dataJsonDto.pe_brand_id;
  const olBrand = dataJsonDto.pe_brand;
  const olImagePath = dataJsonDto.pe_image_path;
  const olNotes = dataJsonDto.pe_notes;
  const olInactive = dataJsonDto.pe_inactive;

  const queryParams = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olBrandId,
    olBrand,
    olImagePath,
    olNotes,
    olInactive,
  ];

  return { procedureName: 'sp_brand_update_v2', queryParams };
}
