import { CustomerPdvFindIdDto } from '../dto/customer-pdv-find-id.dto';

interface CustomerPdvFindIdQueryResult {
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
    number,
    number,
  ];
}

export function CustomerPdvFindIdQuery(
  dataJsonDto: CustomerPdvFindIdDto,
): CustomerPdvFindIdQueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSellerId = dataJsonDto.pe_seller_id;
  const olCustomerId = dataJsonDto.pe_customer_id;

  const queryString = `call sp_customer_pdv_find_id_v2(
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

  const queryParams: CustomerPdvFindIdQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olSellerId,
    olCustomerId,
  ];

  return { queryString, queryParams };
}
