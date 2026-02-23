import { OrderOperCreateDto } from '../dto/order-oper-create.dto';
import { v4 as UuidV4 } from 'uuid';

export function OrderOperCreateQuery(dataJsonDto: OrderOperCreateDto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olSellerId = dataJsonDto.pe_seller_id;
  const olBusinessType = dataJsonDto.pe_business_type;
  const olPaymentFormId = dataJsonDto.pe_payment_form_id;
  const olLocationId = dataJsonDto.pe_location_id;
  const olNotes = dataJsonDto.pe_notes;

  const queryString = ` call sp_order_oper_create_v2(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olCustomerId},
        ${olSellerId},
        ${olBusinessType},
        ${olPaymentFormId},
        ${olLocationId},
        '${olNotes.replace(/'/g, "''")}'
      ) `;

  return queryString;
}
