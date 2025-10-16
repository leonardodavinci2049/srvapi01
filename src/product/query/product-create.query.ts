import { v4 as UuidV4 } from 'uuid';

import { ProductCreateDto } from '../dto/product-create.dto';

export function createProductQuery(dataJsonDto: ProductCreateDto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const olNomeProduto = dataJsonDto.pe_nome_produto;
  const olDescricaoTab = dataJsonDto.pe_descricao_tab ?? '';
  const olEtiqueta = dataJsonDto.pe_etiqueta ?? '';
  const olRef = dataJsonDto.pe_ref ?? '';
  const olModelo = dataJsonDto.pe_modelo ?? '';

  const olIdFornecedor = dataJsonDto.pe_id_fornecedor ?? 0;
  const olIdTipo = dataJsonDto.pe_id_tipo ?? 0;
  const olIdMarca = dataJsonDto.pe_id_marca ?? 0;
  const olIdFamilia = dataJsonDto.pe_id_familia ?? 0;
  const olIdGrupo = dataJsonDto.pe_id_grupo ?? 0;
  const olIdSubgrupo = dataJsonDto.pe_id_subgrupo ?? 0;

  const olPesoGr = dataJsonDto.pe_peso_gr ?? 0;
  const olComprimentoMm = dataJsonDto.pe_comprimento_mm ?? 0;
  const olLarguraMm = dataJsonDto.pe_largura_mm ?? 0;
  const olAlturaMm = dataJsonDto.pe_altura_mm ?? 0;
  const olDiametroMm = dataJsonDto.pe_diametro_mm ?? 0;
  const olTempoDeGarantiaMes = dataJsonDto.pe_tempodegarantia_mes ?? 0;

  const olVlVendaAtacado = dataJsonDto.pe_vl_venda_atacado ?? 0;
  const olVlVendaVarejo = dataJsonDto.pe_vl_venda_varejo ?? 0;
  const olVlCorporativo = dataJsonDto.pe_vl_corporativo ?? 0;

  const olQtEstoque = dataJsonDto.pe_qt_estoque ?? 0;
  const olFlagWebsiteOff = dataJsonDto.pe_flag_website_off ?? 0;
  const olFlagImportado = dataJsonDto.pe_flag_importado ?? 0;
  const olInfo = dataJsonDto.pe_info ?? '';

  const queryString = ` call sp_product_create_v2(
   '${OlUuid}',
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olTypeBusiness},
    '${olNomeProduto}',
    '${olDescricaoTab}',
    '${olEtiqueta}',
    '${olRef}',
    '${olModelo}',
    ${olIdFornecedor},
    ${olIdTipo},
    ${olIdMarca},
    ${olIdFamilia},
    ${olIdGrupo},
    ${olIdSubgrupo},
    ${olPesoGr},
    ${olComprimentoMm},
    ${olLarguraMm},
    ${olAlturaMm},
    ${olDiametroMm},
    ${olTempoDeGarantiaMes},
    ${olVlVendaAtacado},
    ${olVlVendaVarejo},
    ${olVlCorporativo},
    ${olQtEstoque},
    ${olFlagWebsiteOff},
    ${olFlagImportado},
    '${olInfo}'
      ) `;

  return queryString;
}
