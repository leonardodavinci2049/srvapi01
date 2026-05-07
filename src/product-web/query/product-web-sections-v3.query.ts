import { ProductWebSectionsV3Dto } from "../dto/product-web-sections-v3.dto";


export function webFindProductSectionsQuery(
  dataJsonDto: ProductWebSectionsV3Dto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;

  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;

  const olPersonId = dataJsonDto.pe_person_id;

  const olTaxonomyId = dataJsonDto.pe_taxonomy_id ?? 0;
  const olBrandId = dataJsonDto.pe_brand_id ?? 0;
  const olTypeId = dataJsonDto.pe_type_id ?? 0;
  const olPromotionsFlag = dataJsonDto.pe_flag_promotions ?? 0;
  const olHighlightFlag = dataJsonDto.pe_flag_highlight ?? 0;
  const olLaunchFlag = dataJsonDto.pe_launch_flag ?? 0;
  const olRecordCount = dataJsonDto.pe_record_count ?? 100;
  const olPageId = dataJsonDto.pe_page_id ?? 1;
  const olColumnId = dataJsonDto.pe_column_id ?? 1;
  const olOrderId = dataJsonDto.pe_order_id ?? 1;

  const queryString = ` call sp_product_web_sections_v3(
    ${olAppId},
    ${olSystemClientId},
    ${olStoreId},
    '${olOrganizationId.replace(/'/g, "''")}',
    '${olUserId.replace(/'/g, "''")}',
    '${olUserName.replace(/'/g, "''")}',
    '${olUserRole.replace(/'/g, "''")}',
    ${olPersonId},

    ${olTaxonomyId},
    ${olBrandId},
    ${olTypeId},

    ${olPromotionsFlag},
    ${olHighlightFlag},
    ${olLaunchFlag},

    ${olRecordCount},
    ${olPageId},
    ${olColumnId},
    ${olOrderId}
  ) `;

// console.log('Generated Query:', queryString);

  return queryString;
}
