import { PurchasingFindManagerAllDto } from '../dto/purchasing-find-manager-all.dto';

interface PurchasingFindManagerAllQueryResult {
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
    string | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
  ];
}

export function PurchasingFindManagerAllQuery(
  dataJsonDto: PurchasingFindManagerAllDto,
): PurchasingFindManagerAllQueryResult {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olUserName = dataJsonDto.pe_user_name;
  const olUserRole = dataJsonDto.pe_user_role;
  const olPersonId = dataJsonDto.pe_person_id ?? null;
  const olSearch = dataJsonDto.pe_search ?? null;
  const olIdTaxonomy = dataJsonDto.pe_taxonomy_id ?? null;
  const olIdTipo = dataJsonDto.pe_type_id ?? null;
  const olIdMarca = dataJsonDto.pe_brand_id ?? null;
  const olSupplierId = dataJsonDto.pe_supplier_id ?? null;
  const olFlagSalesList = dataJsonDto.pe_flag_sales_list ?? null;
  const olFlagStockList = dataJsonDto.pe_flag_stock_list ?? null;
  const olFlagAdvanced = dataJsonDto.pe_flag_advanced ?? null;
  const olFlagImported = dataJsonDto.pe_flag_imported ?? null;
  const olFlagPremium = dataJsonDto.pe_flag_premium ?? null;
  const olCriticalityLevel = dataJsonDto.pe_criticality_level ?? null;
  const olFlagVariousLists = dataJsonDto.pe_flag_various_lists ?? null;
  const olQtRegistros = dataJsonDto.pe_qt_records ?? null;
  const olPaginaId = dataJsonDto.pe_page_id ?? null;
  const olColunaId = dataJsonDto.pe_column_id ?? null;
  const olOrdemId = dataJsonDto.pe_order_id ?? null;

  const queryString = `call sp_purchasing_find_manager_all_v2(
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
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )`;

  const queryParams: PurchasingFindManagerAllQueryResult['queryParams'] = [
    olAppId,
    olSystemClientId,
    olStoreId,
    olOrganizationId,
    olUserId,
    olUserName,
    olUserRole,
    olPersonId,
    olSearch,
    olIdTaxonomy,
    olIdTipo,
    olIdMarca,
    olSupplierId,
    olFlagSalesList,
    olFlagStockList,
    olFlagAdvanced,
    olFlagImported,
    olFlagPremium,
    olCriticalityLevel,
    olFlagVariousLists,
    olQtRegistros,
    olPaginaId,
    olColunaId,
    olOrdemId,
  ];

  return { queryString, queryParams };
}
