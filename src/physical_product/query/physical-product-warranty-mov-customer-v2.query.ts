import { PhysicalProductWarrantyMovCustomerV2Dto } from '../dto/physical-product-warranty-mov-customer-v2.dto';

export function PhysicalProductWarrantyMovCustomerV2Query(
  dataJsonDto: PhysicalProductWarrantyMovCustomerV2Dto,
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
  const olMovementId = dataJsonDto.pe_movement_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_physical_product_warranty_mov_customer_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},

        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        
        ${olPersonId},
        ${olCustomerId},
        ${olMovementId},
        ${olProductId},
        ${olLimit}
      ) `;

  // console.log('OrderItemFindAllCustomerV2Query: ', queryString);

  return queryString;
}
