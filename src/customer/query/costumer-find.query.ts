import { CostumerFindDto } from '../dto/costumer-find.dto';

export function CostumerFindQuery(dataJsonDto: CostumerFindDto): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olNome = dataJsonDto.pe_nome;
  const olCpf = dataJsonDto.pe_cpf;
  const olCnpj = dataJsonDto.pe_cnpj;
  const olFone1 = dataJsonDto.pe_fone1;
  const olEmailDeLogin = dataJsonDto.pe_email_de_login;
  const olQtRegistros = dataJsonDto.pe_qt_registros;
  const olPaginaId = dataJsonDto.pe_pagina_id;
  const olColunaId = dataJsonDto.pe_coluna_id;
  const olOrdemId = dataJsonDto.pe_ordem_id;

  const queryString = ` call sp_costumer_find(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olCustomerId},
        '${olNome}',
        '${olCpf}',
        '${olCnpj}',
        '${olFone1}',
        '${olEmailDeLogin}',
        ${olQtRegistros},
        ${olPaginaId},
        ${olColunaId},
        ${olOrdemId}

      ) `;

  return queryString;
}
