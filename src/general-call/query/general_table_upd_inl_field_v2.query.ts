import { GeneralTableUpdInlFieldV2Dto } from '../dto/general_table_upd_inl_field_v2.dto';

function escapeSqlString(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function toSqlStringOrNull(value: string | null | undefined): string {
  if (value === null || value === undefined) return 'NULL';
  return `'${escapeSqlString(value)}'`;
}

function toSqlNumberOrNull(value: number | null | undefined): string {
  if (value === null || value === undefined) return 'NULL';
  return String(value);
}

export function generalTableUpdInlFieldV2Query(
  dataJsonDto: GeneralTableUpdInlFieldV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id ?? '';
  const olUserId = dataJsonDto.pe_user_id ?? '';
  const olUserName = dataJsonDto.pe_user_name ?? '';
  const olUserRole = dataJsonDto.pe_user_role ?? '';
  const olPersonId = dataJsonDto.pe_person_id ?? 0;

  const olTableName = dataJsonDto.pe_table_name ?? '';
  const olPrimaryKeyField = dataJsonDto.pe_primary_key_field ?? '';
  const olRegisterId = dataJsonDto.pe_register_id ?? 0;
  const olFieldType = dataJsonDto.pe_field_type ?? 0;
  const olField = dataJsonDto.pe_field ?? '';

  const olValueStr = toSqlStringOrNull(dataJsonDto.pe_value_str);
  const olValueInt = toSqlNumberOrNull(dataJsonDto.pe_value_int);
  const olValueNumeric = toSqlNumberOrNull(dataJsonDto.pe_value_numeric);
  const olValueDate = toSqlStringOrNull(dataJsonDto.pe_value_date);

  const queryString = ` call sp_general_table_upd_inl_field_v2(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${escapeSqlString(olOrganizationId)}',
    '${escapeSqlString(olUserId)}',
    '${escapeSqlString(olUserName)}',
    '${escapeSqlString(olUserRole)}',
    ${olPersonId},

    '${escapeSqlString(olTableName)}',
    '${escapeSqlString(olPrimaryKeyField)}',
    ${olRegisterId},
    ${olFieldType},
    '${escapeSqlString(olField)}',
    ${olValueStr},
    ${olValueInt},
    ${olValueNumeric},
    ${olValueDate}
  ) `;

  // console.log('Generated Query:', queryString);

  return queryString;
}
