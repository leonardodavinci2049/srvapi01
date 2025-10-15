import { ProductFlagsDto } from '../dto/product-upd-flags.dto';

export function updFlagsProductQuery(dataJsonDto: ProductFlagsDto): string {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdProduto = dataJsonDto.pe_id_produto;
  const olFlagInativo = dataJsonDto.pe_flag_inativo;
  const olFlagImportado = dataJsonDto.pe_flag_importado;
  const olFlagControleFisico = dataJsonDto.pe_flag_controle_fisico;
  const olFlagControleEstoque = dataJsonDto.pe_flag_controle_estoque;
  const olFlagDestaque = dataJsonDto.pe_flag_destaque;
  const olFlagPromocao = dataJsonDto.pe_flag_promocao;
  const olFlagDescontinuado = dataJsonDto.pe_flag_descontinuado;
  const olFlagServico = dataJsonDto.pe_flag_servico;
  const olFlagWebsiteOff = dataJsonDto.pe_flag_website_off;

  const queryString = ` call sp_product_upd_flags_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olIdProduto},
    ${olFlagInativo},
    ${olFlagImportado},
    ${olFlagControleFisico},
    ${olFlagControleEstoque},
    ${olFlagDestaque},
    ${olFlagPromocao},
    ${olFlagDescontinuado},
    ${olFlagServico},
    ${olFlagWebsiteOff}
      ) `;

  return queryString;
}
