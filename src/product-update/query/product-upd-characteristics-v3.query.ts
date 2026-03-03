import { ProductUpdCharacteristicsV3Dto } from '../dto/product-upd-characteristics-v3.dto';

export function ProductUpdCharacteristicsV3Query(
  dataJsonDto: ProductUpdCharacteristicsV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olWeightGr = dataJsonDto.pe_weight_gr;
  const olLengthMm = dataJsonDto.pe_length_mm;
  const olWidthMm = dataJsonDto.pe_width_mm;
  const olHeightMm = dataJsonDto.pe_height_mm;
  const olDiameterMm = dataJsonDto.pe_diameter_mm;
  const olWarrantyPeriodDays = dataJsonDto.pe_warranty_period_days;
  const olWarrantyPeriodMonths = dataJsonDto.pe_warranty_period_months;

  const queryString = ` call sp_product_upd_characteristics_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        ${olWeightGr},
        ${olLengthMm},
        ${olWidthMm},
        ${olHeightMm},
        ${olDiameterMm},
        ${olWarrantyPeriodDays},
        ${olWarrantyPeriodMonths}
      ) `;

  return queryString;
}
