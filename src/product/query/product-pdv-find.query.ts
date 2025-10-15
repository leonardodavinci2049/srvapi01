import { ProductPdvFindDto } from '../dto/product-pdv-find.dto';

export function pdvFindProductQuery(dataJsonDto: ProductPdvFindDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id ?? 1;
  const olStoreId = dataJsonDto.pe_store_id ?? 1;
  const olOrganizationId = dataJsonDto.pe_organization_id ?? '';
  const olMemberId = dataJsonDto.pe_member_id ?? '';
  const olUserId = dataJsonDto.pe_user_id ?? '';
  const olPersonId = dataJsonDto.pe_person_id ?? 0;

  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy ?? 0;
  const olIdProduct = dataJsonDto.pe_id_produto ?? 0;
  const olProduct = dataJsonDto.pe_produto ?? '';

  const olFlagEstoque = dataJsonDto.pe_flag_estoque ?? 0;
  const olFlagInativo = dataJsonDto.pe_flag_inativo ?? 0;

  const olQtRegistros = dataJsonDto.pe_qt_registros ?? 100;
  const olPaginaId = dataJsonDto.pe_pagina_id ?? 1;
  const olColunaId = dataJsonDto.pe_coluna_id ?? 1;
  const olOrderId = dataJsonDto.pe_ordem_id ?? 1;

  const queryString = ` call sp_product_pdv_find_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdTaxonomy},
    ${olIdProduct},
    '${olProduct}',
    ${olFlagEstoque},
    ${olFlagInativo},
    ${olQtRegistros},
    ${olPaginaId},
    ${olColunaId},
    ${olOrderId}
      ) `;

  return queryString;
}
