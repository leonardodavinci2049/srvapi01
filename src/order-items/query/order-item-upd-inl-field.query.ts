import { OrderItemUpdInlFieldDto } from '../dto/order-item-upd-inl-field.dto';

export function OrderItemUpdInlFieldQuery(
  dataJsonDto: OrderItemUpdInlFieldDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olRegisterId = dataJsonDto.pe_register_id;
  const olFieldType = dataJsonDto.pe_field_type;
  const olField = dataJsonDto.pe_field;
  const olValueStr = dataJsonDto.pe_value_str ?? '';
  const olValueInt = dataJsonDto.pe_value_int ?? 0;
  const olValueNumeric = dataJsonDto.pe_value_numeric ?? 0;
  const olValueDate = dataJsonDto.pe_value_date ?? '';

  const queryString = ` call sp_order_item_upd_inl_field_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},

        ${olRegisterId},
        ${olFieldType},

        '${olField}',
       '${olValueStr}',
        ${olValueInt},
        ${olValueNumeric},
        '${olValueDate}'

      ) `;

  return queryString;
}
