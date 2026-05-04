import { CartItemAddV1Dto } from '../dto/cart-item-add-v1.dto';

export function CartItemAddV1Query(dataJsonDto: CartItemAddV1Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSessionCartId = dataJsonDto.pe_session_cart_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olQuantity = dataJsonDto.pe_quantity;
  const olSourceUrl = dataJsonDto.pe_source_url;
  const olBusinessType = dataJsonDto.pe_business_type;
  const olLocationId = dataJsonDto.pe_location_id;
  const olIpAddress = dataJsonDto.pe_ip_address;
  const olZipCode = dataJsonDto.pe_zip_code;

  const queryString = ` call sp_cart_item_add_v1(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        '${olSessionCartId.replace(/'/g, "''")}',
        ${olProductId},
        ${olQuantity},
        '${olSourceUrl.replace(/'/g, "''")}',
        ${olBusinessType},
        ${olLocationId},
        '${olIpAddress.replace(/'/g, "''")}',
        '${olZipCode.replace(/'/g, "''")}'
      ) `;

  return queryString;
}