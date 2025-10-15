import { ProductUpdStockDto } from '../dto/product-upd-stock.dto';

export function updStockProductQuery(dataJsonDto: ProductUpdStockDto): string {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdProduto = dataJsonDto.pe_id_produto;
  const olQtEstoque = dataJsonDto.pe_qt_estoque;
  const olQtMinimo = dataJsonDto.pe_qt_minimo;

  const queryString = ` call sp_product_upd_stock_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdProduto},
    ${olQtEstoque},
    ${olQtMinimo}
      ) `;

  return queryString;
}
