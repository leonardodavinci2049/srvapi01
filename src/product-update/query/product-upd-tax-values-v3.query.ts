import { ProductUpdTaxValuesV3Dto } from '../dto/product-upd-tax-values-v3.dto';

export function ProductUpdTaxValuesV3Query(
  dataJsonDto: ProductUpdTaxValuesV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olProductId = dataJsonDto.pe_product_id;
  const olCfop = dataJsonDto.pe_cfop;
  const olCst = dataJsonDto.pe_cst;
  const olEan = dataJsonDto.pe_ean;
  const olNbm = dataJsonDto.pe_nbm;
  const olNcm = dataJsonDto.pe_ncm;
  const olPpb = dataJsonDto.pe_ppb;
  const olTemp = dataJsonDto.pe_temp;

  const queryString = ` call sp_product_upd_tax_values_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olProductId},
        '${olCfop}',
        '${olCst}',
        '${olEan}',
        '${olNbm}',
        ${olNcm},
        ${olPpb},
        ${olTemp}
      ) `;

  return queryString;
}
