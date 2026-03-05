import { generateSlug } from 'src/core/utils/generators/generate-slug';
import { ProductCreateV3Dto } from '../dto/product-create-v3.dto';
import { v4 as UuidV4 } from 'uuid';

export function ProductCreateV3Query(dataJsonDto: ProductCreateV3Dto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olProductName = dataJsonDto.pe_product_name;
  const olSlug = generateSlug(dataJsonDto.pe_product_name);
  const olTabDescription = dataJsonDto.pe_tab_description ?? '';
  const olLabel = dataJsonDto.pe_label ?? '';
  const olRef = dataJsonDto.pe_ref ?? '';
  const olModel = dataJsonDto.pe_model ?? '';

  const olSupplierId = dataJsonDto.pe_supplier_id ?? 0;
  const olProductTypeId = dataJsonDto.pe_product_type_id ?? 0;
  const olBrandId = dataJsonDto.pe_brand_id ?? 0;

  const olWeightGr = dataJsonDto.pe_weight_gr ?? 0;
  const olLengthMm = dataJsonDto.pe_length_mm ?? 0;
  const olWidthMm = dataJsonDto.pe_width_mm ?? 0;
  const olHeightMm = dataJsonDto.pe_height_mm ?? 0;
  const olDiameterMm = dataJsonDto.pe_diameter_mm ?? 0;
  const olWarrantyPeriodDays = dataJsonDto.pe_warranty_period_days ?? 0;

  const olWholesalePrice = dataJsonDto.pe_wholesale_price ?? 0;
  const olRetailPrice = dataJsonDto.pe_retail_price ?? 0;
  const olCorporatePrice = dataJsonDto.pe_corporate_price ?? 0;

  const olStockQuantity = dataJsonDto.pe_stock_quantity ?? 0;
  const olFlagWebsiteOff = dataJsonDto.pe_website_off_flag ?? 0;
  const olFlagImportado = dataJsonDto.pe_imported_flag ?? 0;
  const olInfo = dataJsonDto.pe_additional_info ?? '';

  const queryString = ` call sp_product_create_v3(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},

        '${olProductName}',
        '${olSlug}',

        '${olTabDescription}',
        '${olLabel}',
        '${olRef}',
        '${olModel}',

        ${olSupplierId},
        ${olProductTypeId},
        ${olBrandId},

        ${olWeightGr},
        ${olLengthMm},
        ${olWidthMm},
        ${olHeightMm},
        ${olDiameterMm},
        ${olWarrantyPeriodDays},

        ${olWholesalePrice},
        ${olRetailPrice},
        ${olCorporatePrice},

        ${olStockQuantity},

        ${olFlagWebsiteOff},
        ${olFlagImportado},
        '${olInfo}'
      ) `;
  return queryString;
}
