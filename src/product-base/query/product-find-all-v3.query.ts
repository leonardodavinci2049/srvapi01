import { ProductFindAllV3Dto } from '../dto/product-find-all-v3.dto';

export function ProductFindAllV3Query(
  dataJsonDto: ProductFindAllV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSearch = dataJsonDto.pe_search ?? '';
  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy ?? 0;
  const olIdTipo = dataJsonDto.pe_id_tipo ?? 0;
  const olIdMarca = dataJsonDto.pe_id_marca ?? 0;

  const olFlagEstoque = dataJsonDto.pe_flag_estoque ?? 0;
  const olFlagServico = dataJsonDto.pe_flag_servico ?? 0;

  const olQtRegistros = dataJsonDto.pe_qt_registros ?? 10;
  const olPaginaId = dataJsonDto.pe_pagina_id ?? 1;
  const olColunaId = dataJsonDto.pe_coluna_id ?? 0;
  const olOrdemId = dataJsonDto.pe_ordem_id ?? 0;

  const queryString = ` call sp_product_find_all_v3(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        '${olSearch}',
        ${olIdTaxonomy},
        ${olIdTipo},
        ${olIdMarca},
        ${olFlagEstoque},
        ${olFlagServico},
        ${olQtRegistros},
        ${olPaginaId},
        ${olColunaId},
        ${olOrdemId}
    ) `;

  return queryString;
}
