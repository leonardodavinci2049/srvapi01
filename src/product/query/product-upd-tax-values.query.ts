import { ProductUpdTaxValuesDto } from '../dto/product-upd_tax-values.dto';

export function updTaxValuesProductQuery(
  dataJsonDto: ProductUpdTaxValuesDto,
): string {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdProduto = dataJsonDto.pe_id_produto;
  const olCfop = dataJsonDto.pe_cfop;
  const olCst = dataJsonDto.pe_cst;
  const olEan = dataJsonDto.pe_ean;
  const olNbm = dataJsonDto.pe_nbm;
  const olNcm = dataJsonDto.pe_ncm;
  const olPpb = dataJsonDto.pe_ppb;
  const olTemp = dataJsonDto.pe_temp;

  const queryString = ` call sp_product_upd_tax_values_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdProduto},
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
