import { ProductUpdGeneralV3Dto } from '../dto/product-upd-general-v3.dto';

export function ProductUpdGeneralV3Query(
  dataJsonDto: ProductUpdGeneralV3Dto,
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
  const olProductName = dataJsonDto.pe_product_name;
  const olRef = dataJsonDto.pe_ref;
  const olModel = dataJsonDto.pe_model;
  const olLabel = dataJsonDto.pe_label;
  const olTabDescription = dataJsonDto.pe_tab_description;

  const queryString = ` call sp_product_upd_general_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        '${olProductName}',
        '${olRef}',
        '${olModel}',
        '${olLabel}',
        '${olTabDescription}'
      ) `;

  return queryString;
}
