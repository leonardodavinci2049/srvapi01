import { v4 as UuidV4 } from 'uuid';
import { OrderOperCreateManagerDto } from '../dto/order-oper-create-manager.dto';

interface OrderOperCreateManagerQueryResult {
  queryString: string;
  queryParams: [
    string,
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    number | null,
    number,
    number,
    number,
    number,
    number,
    string | null,
  ];
}

export function OrderOperCreateManagerQuery(
  dataJsonDto: OrderOperCreateManagerDto,
): OrderOperCreateManagerQueryResult {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olSellerId = dataJsonDto.pe_seller_id ?? null;
  const olBusinessType = dataJsonDto.pe_business_type ?? null;
  const olPaymentFormId = dataJsonDto.pe_payment_form_id ?? null;
  const olLocationId = dataJsonDto.pe_location_id ?? null;
  const olNotes = dataJsonDto.pe_notes ?? null;

  const queryString = `call sp_order_oper_create_manager_v2(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )`;

  const queryParams: OrderOperCreateManagerQueryResult['queryParams'] = [
    OlUuid,
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCustomerId,
    olSellerId,
    olBusinessType,
    olPaymentFormId,
    olLocationId,
    olNotes,
  ];

  return { queryString, queryParams };
}
