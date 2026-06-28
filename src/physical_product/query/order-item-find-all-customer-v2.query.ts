import { OrderItemFindAllCustomerV2Dto } from '../dto/order-item-find-all-customer-v2.dto';

export function OrderItemFindAllCustomerV2Query(
  dataJsonDto: OrderItemFindAllCustomerV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olSearch = dataJsonDto.pe_search;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_order_item_find_all_customer_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        ${olCustomerId},
        '${olSearch.replace(/'/g, "''")}',
        ${olLimit}
      ) `;



  return queryString;
}
