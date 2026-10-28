import { CarrierUpdPersonalV2Dto } from '../dto/carrier-upd-personal-v2.dto';

interface CarrierUpdPersonalV2QueryResult {
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
  ];
}

export function CarrierUpdPersonalV2Query(
  dataJsonDto: CarrierUpdPersonalV2Dto,
): CarrierUpdPersonalV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olFirstName = dataJsonDto.pe_first_name ?? null;
  const olPersonalTaxId = dataJsonDto.pe_personal_tax_id ?? null;
  const olIdentityDocumentNumber =
    dataJsonDto.pe_identity_document_number ?? null;
  const olBirthDate = dataJsonDto.pe_birth_date ?? null;

  const queryString = `call sp_carrier_upd_personal_v2(
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

  const queryParams: CarrierUpdPersonalV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCarrierId,
    olFirstName,
    olPersonalTaxId,
    olIdentityDocumentNumber,
    olBirthDate,
  ];

  return { queryString, queryParams };
}
