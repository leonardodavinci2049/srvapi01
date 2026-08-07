import { CostumerFindPdvIdDto } from '../dto/costumer-find-pdv-id.dto';

export function CostumerFindPdvIdQuery(
  dataJsonDto: CostumerFindPdvIdDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olSellerId = dataJsonDto.pe_seller_id;
  const olCustomerId = dataJsonDto.pe_customer_id;

  const queryString = ` call sp_costumer_find_pdv_id_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        ${olSellerId},
        ${olCustomerId}
      ) `;

  return queryString;
}
