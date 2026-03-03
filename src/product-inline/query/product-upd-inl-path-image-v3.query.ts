import { ProductUpdInlPathImageV3Dto } from '../dto/product-upd-inl-path-image-v3.dto';

export function ProductUpdInlPathImageV3Query(
  dataJsonDto: ProductUpdInlPathImageV3Dto,
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
  const olPathImagem = dataJsonDto.pe_path_imagem;

  const queryString = ` call sp_product_upd_inl_path_image_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        '${olPathImagem}'
      ) `;

  return queryString;
}
