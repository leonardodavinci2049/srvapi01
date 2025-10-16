import { TaxonomyRelProdutoDto } from '../dto/taxonomy-rel-produto.dto';

export function findTaxonomyRelProdutoQuery(
  dataJsonDto: TaxonomyRelProdutoDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;

  const olIdRecord = dataJsonDto.pe_id_record;

  const queryString = ` call sp_taxonomy_rel_produto_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olMemberId}',
        '${olUserId}',
        ${olPersonId},
        ${olIdRecord}
      ) `;

  return queryString;
}
