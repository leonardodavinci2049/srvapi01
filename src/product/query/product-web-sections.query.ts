import { ProductWebSectionsDto } from '../dto/product-web-sections.dto';

export function webFindProductSectionsQuery(
  dataJsonDto: ProductWebSectionsDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id ?? 1;
  const olStoreId = dataJsonDto.pe_store_id ?? 1;
  const olOrganizationId = dataJsonDto.pe_organization_id ?? '';
  const olMemberId = dataJsonDto.pe_member_id ?? '';
  const olUserId = dataJsonDto.pe_user_id ?? '';
  const olPersonId = dataJsonDto.pe_person_id ?? 0;

  const olIdTaxonomy = dataJsonDto.pe_id_taxonomy ?? 0;
  const olIdMarca = dataJsonDto.pe_id_marca ?? 0;
  //PE_ID_TIPO INT,
  const olIdTipo = dataJsonDto.pe_id_tipo ?? 0;

  //PE_FLAG_PROMOTIONS INT,
  const olFlagPromotions = dataJsonDto.pe_flag_promotions ?? 0;
  const olFlagHighlight = dataJsonDto.pe_flag_highlight ?? 0;
  const olFlagLancamento = dataJsonDto.pe_flag_lancamento ?? 0;

  const olQtRegistros = dataJsonDto.pe_qt_registros ?? 100;
  const olPaginaId = dataJsonDto.pe_pagina_id ?? 1;
  const olColunaId = dataJsonDto.pe_coluna_id ?? 1;
  const olOrderId = dataJsonDto.pe_ordem_id ?? 1;

  const queryString = ` call sp_product_web_sections_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},

    ${olIdTaxonomy},
    ${olIdMarca},
    ${olIdTipo},

    ${olFlagPromotions},
    ${olFlagHighlight},
    ${olFlagLancamento},

    ${olQtRegistros},
    ${olPaginaId},
    ${olColunaId},
    ${olOrderId}
      ) `;

  return queryString;
}
