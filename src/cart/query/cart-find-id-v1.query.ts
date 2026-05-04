import { CartFindIdV1Dto } from '../dto/cart-find-id-v1.dto';

export function CartFindIdV1Query(dataJsonDto: CartFindIdV1Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCartId = dataJsonDto.pe_cart_id;
  const olBusinessType = dataJsonDto.pe_business_type;

  const queryString = ` call sp_cart_find_id_v1(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        '${olCartId.replace(/'/g, "''")}',
        ${olBusinessType}
      ) `;

  return queryString;
}
