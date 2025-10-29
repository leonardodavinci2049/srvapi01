import { ProductUpdPathImagemDto } from '../dto/product-upd-path-imagem.dto';

export function ProductUpdPathImagemQuery(
  dataJsonDto: ProductUpdPathImagemDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  //pe_id_produto
  const olIdProduto = dataJsonDto.pe_id_produto;
  const olPathImagem = dataJsonDto.pe_path_imagem;

  const queryString = ` call sp_product_upd_path_imagem_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdProduto},
        '${olPathImagem}'      ) `;

  return queryString;
}
