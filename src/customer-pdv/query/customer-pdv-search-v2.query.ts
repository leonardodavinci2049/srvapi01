import { CustomerPdvSearchV2Dto } from '../dto/customer-pdv-search-v2.dto';

interface CustomerPdvSearchV2QueryResult {
  queryString: string;
  queryParams: [
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    number | null,
    string,
    number,
    number,
    number,
    number,
  ];
}

export function CustomerPdvSearchV2Query(
  dataJsonDto: CustomerPdvSearchV2Dto,
): CustomerPdvSearchV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSearch = dataJsonDto.pe_search;
  const olQtRegistros = dataJsonDto.pe_qt_registros;
  const olPaginaId = dataJsonDto.pe_pagina_id;
  const olColunaId = dataJsonDto.pe_coluna_id;
  const olOrdemId = dataJsonDto.pe_ordem_id;

  const queryString = `call sp_customer_pdv_search_v2(
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
  )`;

  const queryParams: CustomerPdvSearchV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olSearch,
    olQtRegistros,
    olPaginaId,
    olColunaId,
    olOrdemId,
  ];

  return { queryString, queryParams };
}
