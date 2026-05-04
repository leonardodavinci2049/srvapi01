import { CartItemUpdQtV1Dto } from '../dto/cart-item-upd-qt-v1.dto';

export function CartItemUpdQtV1Query(
  dataJsonDto: CartItemUpdQtV1Dto,
): string {
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
  const olItemQuantity = dataJsonDto.pe_item_quantity;

  const queryString = ` call sp_cart_item_upd_qt_v1(
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
        ${olItemQuantity}
      ) `;

  return queryString;
}