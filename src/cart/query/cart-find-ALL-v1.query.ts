import { CartFindAllV1Dto } from '../dto/cart-find-ALL-v1.dto';

export function CartFindAllV1Query(dataJsonDto: CartFindAllV1Dto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSearch = dataJsonDto.pe_search;
  const olStatusId = dataJsonDto.pe_status_id;
  const olStartDate = dataJsonDto.pe_start_date;
  const olEndDate = dataJsonDto.pe_end_date;
  const olLimit = dataJsonDto.pe_limit;

  const queryString = ` call sp_cart_find_all_v1(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId.replace(/'/g, "''")}',
        '${olUserId.replace(/'/g, "''")}',
        '${olUserName.replace(/'/g, "''")}',
        '${olUserRole.replace(/'/g, "''")}',
        ${olPersonId},
        '${olSearch.replace(/'/g, "''")}',
        ${olStatusId},
        '${olStartDate.replace(/'/g, "''")}',
        '${olEndDate.replace(/'/g, "''")}',
        ${olLimit}
      ) `;

  return queryString;
}
