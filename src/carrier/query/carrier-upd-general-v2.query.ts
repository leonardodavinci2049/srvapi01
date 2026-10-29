import { CarrierUpdGeneralV2Dto } from '../dto/carrier-upd-general-v2.dto';

interface CarrierUpdGeneralV2QueryResult {
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
    string,
    string | null,
    string | null,
    string | null,
    string | null,
  ];
}

export function CarrierUpdGeneralV2Query(
  dataJsonDto: CarrierUpdGeneralV2Dto,
): CarrierUpdGeneralV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olName = dataJsonDto.pe_name;
  const olPhone1 = dataJsonDto.pe_phone1 ?? null;
  const olWhatsapp1 = dataJsonDto.pe_whatsapp1 ?? null;
  const olContact1 = dataJsonDto.pe_contact1 ?? null;
  const olEmail1 = dataJsonDto.pe_email1 ?? null;

  const queryString = `call sp_carrier_upd_general_v2(
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
        ?,
        ?
      )`;

  const queryParams: CarrierUpdGeneralV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCarrierId,
    olName,
    olPhone1,
    olWhatsapp1,
    olContact1,
    olEmail1,
  ];

  return { queryString, queryParams };
}
