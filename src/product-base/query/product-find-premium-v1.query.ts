    import { ProductFindPremiumV1Dto } from '../dto/product-find-premium-v1.dto';

export function ProductFindPremiumV1Query(
  dataJsonDto: ProductFindPremiumV1Dto,
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
  const olIdTaxonomy = dataJsonDto.pe_idTaxonomy ?? null;
  const olIdTipo = dataJsonDto.pe_idTipo ?? null;
  const olIdMarca = dataJsonDto.pe_idMarca ?? null;
  const olFlagEstoque = dataJsonDto.pe_flagEstoque ?? null;
  const olFlagServico = dataJsonDto.pe_flagServico ?? null;
  const olFlagPromotions = dataJsonDto.pe_flagPromotions ?? null;
  const olFlagHighlight = dataJsonDto.pe_flagHighlight ?? null;
  const olFlagLancamento = dataJsonDto.pe_flagLancamento ?? null;
  const olQtRegistros = dataJsonDto.pe_qtRegistros ?? null;
  const olPaginaId = dataJsonDto.pe_paginaId ?? null;
  const olColunaId = dataJsonDto.pe_colunaId ?? null;
  const olOrdemId = dataJsonDto.pe_ordemId ?? null;


  const queryString = ` call sp_product_find_premium_v1(
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
        ${olFlagPromotions},
        ${olFlagHighlight},
        ${olFlagLancamento},
        ${olQtRegistros},
        ${olPaginaId},
        ${olColunaId},
        ${olOrdemId},
    ) `;
  // console.log('Generated Query:', queryString);

  return queryString;
}
