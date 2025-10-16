import { ProductUpdCaracteristicsDto } from '../dto/product-upd-caracteristics.dto';

export function updCaracteristicsProductQuery(
  dataJsonDto: ProductUpdCaracteristicsDto,
): string {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdProduto = dataJsonDto.pe_id_produto;
  const olPesoGr = dataJsonDto.pe_peso_gr;
  const olComprimentoMm = dataJsonDto.pe_comprimento_mm;
  const olLarguraMm = dataJsonDto.pe_largura_mm;
  const olAlturaMm = dataJsonDto.pe_altura_mm;
  const olDiametroMm = dataJsonDto.pe_diametro_mm;
  const olTempoDeGarantiaDia = dataJsonDto.pe_tempodegarantia_dia;
  const olTempoDeGarantiaMes = dataJsonDto.pe_tempodegarantia_mes;

  const queryString = ` call sp_product_upd_characteristics_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdProduto},
    ${olPesoGr},
    ${olComprimentoMm},
    ${olLarguraMm},
    ${olAlturaMm},
    ${olDiametroMm},
    ${olTempoDeGarantiaDia},
    ${olTempoDeGarantiaMes}
      ) `;

  return queryString;
}
