import { ProductUpdGeneralDto } from '../dto/product-upd-general.dto';

export function updGeneralProductQuery(
  dataJsonDto: ProductUpdGeneralDto,
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
  const olRef = dataJsonDto.pe_ref;
  const olModelo = dataJsonDto.pe_modelo;
  const olEtiqueta = dataJsonDto.pe_etiqueta;
  const olDescricaoTab = dataJsonDto.pe_descricao_tab;

  const queryString = ` call sp_product_upd_general_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdProduto},
    '${olNomeProduto}',
    '${olRef}',
    '${olModelo}',
    '${olEtiqueta}',
    '${olDescricaoTab}'
      ) `;

  return queryString;
}
