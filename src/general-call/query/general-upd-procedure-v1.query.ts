import { GeneralUpdProcedureV1Dto } from '../dto/general-upd-procedure-v1.dto';

export function generalUpdProcedureV1Query(
  dataJsonDto: GeneralUpdProcedureV1Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olRegisterId = dataJsonDto.pe_register_id ?? 0;
  const olProcedureName = dataJsonDto.pe_procedure_name ?? '';
  const olFieldType = dataJsonDto.pe_field_type ?? 0;
  const olField = dataJsonDto.pe_field ?? '';
  const olValueStr = dataJsonDto.pe_value_str ?? '';
  const olValueInt = dataJsonDto.pe_value_int ?? 0;
  const olValueNumeric = dataJsonDto.pe_value_numeric ?? 0;
  const olValueDate = dataJsonDto.pe_value_date ?? '';

  const queryString = ` call sp_general_upd_procedure_v1(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId.replace(/'/g, "''")}',
    '${olUserId.replace(/'/g, "''")}',
    '${olUserName.replace(/'/g, "''")}',
    '${olUserRole.replace(/'/g, "''")}',
    ${olPersonId},

    ${olRegisterId},
    '${olProcedureName.replace(/'/g, "''")}',
    ${olFieldType},
    '${olField.replace(/'/g, "''")}',
    '${olValueStr.replace(/'/g, "''")}',
    ${olValueInt},
    ${olValueNumeric},
    '${olValueDate.replace(/'/g, "''")}'
  ) `;

  // console.log('Generated Query:', queryString);

  return queryString;
}
