import { CarrierUpdInternetV2Dto } from '../dto/carrier-upd-internet-v2.dto';

interface CarrierUpdInternetV2QueryResult {
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
    string | null,
    string | null,
    string | null,
    string | null,
    string | null,
  ];
}

export function CarrierUpdInternetV2Query(
  dataJsonDto: CarrierUpdInternetV2Dto,
): CarrierUpdInternetV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olWebsite = dataJsonDto.pe_website ?? null;
  const olInstagram = dataJsonDto.pe_instagram ?? null;
  const olMap = dataJsonDto.pe_map ?? null;
  const olFacebook = dataJsonDto.pe_facebook ?? null;
  const olTwitter = dataJsonDto.pe_twitter ?? null;

  const queryString = `call sp_carrier_upd_internet_v2(
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

  const queryParams: CarrierUpdInternetV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCarrierId,
    olWebsite,
    olInstagram,
    olMap,
    olFacebook,
    olTwitter,
  ];

  return { queryString, queryParams };
}
