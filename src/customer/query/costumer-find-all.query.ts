import { CostumerFindAllDto } from '../dto/costumer-find-all.dto';

export function CostumerFindAllQuery(dataJsonDto: CostumerFindAllDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olName = dataJsonDto.pe_name;
  const olCpf = dataJsonDto.pe_cpf;
  const olCnpj = dataJsonDto.pe_cnpj;
  const olPhone = dataJsonDto.pe_phone;
  const olEmail = dataJsonDto.pe_email;
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
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        '${olName}',
        '${olCpf}',
        '${olCnpj}',
        '${olPhone}',
        '${olEmail}',
        ${olQtRegistros},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}

      ) `;

  return queryString;
}
