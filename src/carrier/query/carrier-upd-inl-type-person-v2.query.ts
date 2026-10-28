import { CarrierUpdInlTypePersonV2Dto } from '../dto/carrier-upd-inl-type-person-v2.dto';

interface CarrierUpdInlTypePersonV2QueryResult {
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

export function CarrierUpdInlTypePersonV2Query(
  dataJsonDto: CarrierUpdInlTypePersonV2Dto,
): CarrierUpdInlTypePersonV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olPersonTypeId = dataJsonDto.pe_person_type_id;

  const queryString = `call sp_carrier_upd_inl_type_person_v2(
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

  const queryParams: CarrierUpdInlTypePersonV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCarrierId,
    olPersonTypeId,
  ];

  return { queryString, queryParams };
}
