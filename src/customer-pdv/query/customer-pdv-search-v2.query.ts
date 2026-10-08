import { CustomerPdvFindAllV2Dto } from "../dto/customer-pdv-find-all-v2.dto";

export function CustomerPdvFindAllV2Query(
  dataJsonDto: CustomerPdvFindAllV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 0;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;


  const queryString = ` call sp_customer_pdv_search_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',

      ) `;
  return queryString;
}
