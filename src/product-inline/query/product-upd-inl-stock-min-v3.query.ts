import { ProductUpdInlStockMinV3Dto } from '../dto/product-upd-inl-stock-min-v3.dto';

export function ProductUpdInlStockMinV3Query(
  dataJsonDto: ProductUpdInlStockMinV3Dto,
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
  const olStockMin = dataJsonDto.pe_stock_min;

  const queryString = ` call sp_product_upd_inl_stock_min_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        ${olStockMin}
      ) `;

  return queryString;
}
