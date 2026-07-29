import { CostumerFindManagerAllV2Dto } from '../dto/costumer-find-manager-all-v2.dto';

export function CostumerFindManagerAllV2Query(
  dataJsonDto: CostumerFindManagerAllV2Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 0;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id;

  const olSearch = dataJsonDto.pe_search;
  const olCategoryId = dataJsonDto.pe_category_id;
  const olClientType = dataJsonDto.pe_client_type;
  const olPersonType = dataJsonDto.pe_person_type;
  const olFlagNoImage = dataJsonDto.pe_flag_no_image;
  const olFlagApproved = dataJsonDto.pe_flag_approved;
  const olGenderType = dataJsonDto.pe_gender_type;
  const olFlagRestricted = dataJsonDto.pe_flag_restricted;
  const olFlagEnabled = dataJsonDto.pe_flag_enabled;
  const olStatusId = dataJsonDto.pe_status_id;
  const olFlagOperationList = dataJsonDto.pe_flag_operation_list;
  const olStartDate = dataJsonDto.pe_start_date;
  const olEndDate = dataJsonDto.pe_end_date;
  const olQtRecords = dataJsonDto.pe_qt_records;
  const olPageId = dataJsonDto.pe_page_id;
  const olColumnId = dataJsonDto.pe_column_id;
  const olOrderId = dataJsonDto.pe_order_id;

  const queryString = ` call sp_costumer_find_manager_all_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olUserName}',
        '${olUserRole}',
        ${olPersonId},
        '${olSearch}',
        ${olCategoryId},
        ${olClientType},
        ${olPersonType},
        ${olFlagNoImage},
        ${olFlagApproved},
        ${olGenderType},
        ${olFlagRestricted},
        ${olFlagEnabled},
        ${olStatusId},
        ${olFlagOperationList},
        '${olStartDate}',
        '${olEndDate}',
        ${olQtRecords},
        ${olPageId},
        ${olColumnId},
        ${olOrderId}
      ) `;

  return queryString;
}
