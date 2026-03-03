import { ProductUpdPriceV3Dto } from '../dto/product-upd-price-v3.dto';

export function ProductUpdPriceV3Query(
  dataJsonDto: ProductUpdPriceV3Dto,
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
  const olWholesalePrice = dataJsonDto.pe_wholesale_price;
  const olCorporatePrice = dataJsonDto.pe_corporate_price;
  const olRetailPrice = dataJsonDto.pe_retail_price;

  const queryString = ` call sp_product_upd_price_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        ${olWholesalePrice},
        ${olCorporatePrice},
        ${olRetailPrice}
      ) `;

  return queryString;
}
