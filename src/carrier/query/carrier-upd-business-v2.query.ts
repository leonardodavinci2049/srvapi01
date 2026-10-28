import { CarrierUpdBusinessV2Dto } from '../dto/carrier-upd-business-v2.dto';

interface CarrierUpdBusinessV2QueryResult {
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
    string | null,
    string | null,
    string | null,
  ];
}

export function CarrierUpdBusinessV2Query(
  dataJsonDto: CarrierUpdBusinessV2Dto,
): CarrierUpdBusinessV2QueryResult {
  const olAppId = dataJsonDto.pe_app_id;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olCarrierId = dataJsonDto.pe_carrier_id;
  const olLegalName = dataJsonDto.pe_legal_name ?? null;
  const olTradeName = dataJsonDto.pe_trade_name ?? null;
  const olCompanyRegistrationDate =
    dataJsonDto.pe_company_registration_date ?? null;
  const olCompanyTaxId = dataJsonDto.pe_company_tax_id ?? null;
  const olStateRegistration = dataJsonDto.pe_state_registration ?? null;
  const olMunicipalRegistration = dataJsonDto.pe_municipal_registration ?? null;
  const olRepresentativeName = dataJsonDto.pe_representative_name ?? null;
  const olRepresentativePosition =
    dataJsonDto.pe_representative_position ?? null;

  const queryString = `call sp_carrier_upd_business_v2(
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
        ?,
        ?,
        ?,
        ?
      )`;

  const queryParams: CarrierUpdBusinessV2QueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olCarrierId,
    olLegalName,
    olTradeName,
    olCompanyRegistrationDate,
    olCompanyTaxId,
    olStateRegistration,
    olMunicipalRegistration,
    olRepresentativeName,
    olRepresentativePosition,
  ];

  return { queryString, queryParams };
}
