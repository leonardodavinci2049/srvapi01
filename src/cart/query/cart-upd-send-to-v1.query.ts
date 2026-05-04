import { CartUpdSendToV1Dto } from '../dto/cart-upd-send-to-v1.dto';

export function CartUpdSendToV1Query(
  dataJsonDto: CartUpdSendToV1Dto,
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
  const olCustomerName = dataJsonDto.pe_customer_name;
  const olPaymentFormId = dataJsonDto.pe_payment_form_id;
  const olPublicCode = dataJsonDto.pe_public_code;

  const queryString = ` call sp_cart_upd_send_to_v1(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        '${olSessionCartId.replace(/'/g, "''")}',
        '${olCustomerName.replace(/'/g, "''")}',
        ${olPaymentFormId},
        '${olPublicCode.replace(/'/g, "''")}'
      ) `;

  return queryString;
}