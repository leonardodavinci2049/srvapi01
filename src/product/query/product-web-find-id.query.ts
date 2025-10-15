import { ProductWebFindIdDto } from '../dto/product-web-find-id.dto';

export function webFindIdProductQuery(
  dataJsonDto: ProductWebFindIdDto,
): string {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olMemberId = dataJsonDto.pe_member_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olPersonId = dataJsonDto.pe_person_id;
  const olTypeBusiness = dataJsonDto.pe_type_business;

  const olIdProduct = dataJsonDto.pe_id_produto;
  const olSlugProduct = dataJsonDto.pe_slug_produto;

  const queryString = ` call sp_product_web_find_id_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId}',
    '${olMemberId}',
    '${olUserId}',
    ${olPersonId},
    ${olTypeBusiness},
    ${olIdProduct},
    '${olSlugProduct}'
      ) `;

  return queryString;
}
