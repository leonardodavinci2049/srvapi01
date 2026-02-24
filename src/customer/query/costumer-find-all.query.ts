import { CostumerFindAllDto } from '../dto/costumer-find-all.dto';

export function CostumerFindAllQuery(dataJsonDto: CostumerFindAllDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olSearch = dataJsonDto.pe_search;

  const olQtRegistros = dataJsonDto.pe_qt_registros;
  const olPageId = dataJsonDto.pe_page_id;
  const olColumnId = dataJsonDto.pe_column_id;
  const olOrderId = dataJsonDto.pe_order_id;

  const queryString = ` call sp_costumer_find_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',	
        ${olPersonId},
        '${olSearch}',
        ${olQtRegistros},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}

      ) `;

  return queryString;
}
