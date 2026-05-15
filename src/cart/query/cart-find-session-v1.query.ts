import { CartFindSessionV1Dto } from '../dto/cart-find-session-v1.dto';

export function CartFindSessionV1Query(
  dataJsonDto: CartFindSessionV1Dto,
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
  const olBusinessType = dataJsonDto.pe_business_type;

  const queryString = ` call sp_cart_find_session_v1(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        '${olSessionCartId.replace(/'/g, "''")}',
        ${olBusinessType}
      ) `;

  return queryString;
}
