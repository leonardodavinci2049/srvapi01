import { SellerFindManagerIdV2Dto } from '../dto/seller-find-manager-id-v2.dto';

interface SellerFindManagerIdV2QueryResult {
  queryString: string;
  queryParams: [
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    number,
    number,
  ];
}

export function SellerFindManagerIdV2Query(
  dataJsonDto: SellerFindManagerIdV2Dto,
): SellerFindManagerIdV2QueryResult {
  const queryString = `
    CALL sp_seller_find_manager_id_v2(?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const queryParams: SellerFindManagerIdV2QueryResult['queryParams'] = [
    dataJsonDto.pe_app_id,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_organization_id,
    dataJsonDto.pe_user_id,
    dataJsonDto.pe_user_name,
    dataJsonDto.pe_user_role,
    dataJsonDto.pe_person_id ?? 0,
    dataJsonDto.pe_seller_id,
  ];


  return { queryString, queryParams };
}
