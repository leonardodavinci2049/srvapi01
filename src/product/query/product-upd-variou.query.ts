import { ProductUpdVariouDto } from '../dto/product-upd-variou.dto';

export function updVariouProductQuery(
  dataJsonDto: ProductUpdVariouDto,
): string {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdProduto = dataJsonDto.pe_id_produto;
  const olNomeProduto = dataJsonDto.pe_nome_produto;

  const queryString = ` call sp_product_upd_variou_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdProduto},
    '${olNomeProduto}'
      ) `;

  return queryString;
}
