import { Injectable } from '@nestjs/common';

import { ResultModel } from 'src/core/utils/result.model';
import { MESSAGES } from 'src/core/utils/constants/globalConstants';

import { DatabaseService } from 'src/database/database.service';
import { ProductFindManagerAllV2Dto } from './dto/product-find-manager-all-v2.dto';
import { ProductFindManagerIdV2Dto } from './dto/product-find-manager-id-v2.dto';
import {
  SpResultProductFindManagerAllData,
  SpResultProductFindManagerIdData,
} from './types/produtct-type.type';
import { ProductFindManagerAllV2Query } from './query/product-find-manager-all-v2.query';
import { processProcedureResultMultiQuery } from 'src/core/procedure.result/process-procedure-result.query';
import { ProductFindManagerIdV2Query } from './query/product-find-manager-id-v2.query';
import { ProductFindManagerSearchV2Dto } from './dto/product-find-manager-search.dto';
import { ProductFindManagerSearchV2Query } from './query/product-find-manager-search.query';

@Injectable()
export class ProductManagerService {
  constructor(private readonly dbService: DatabaseService) {}
  create() {
    return 'This action adds a new productManager';
  }

  private async createProductFindManagerAllFilterLog(
    dataJsonDto: ProductFindManagerAllV2Dto,
    queryString: string,
  ): Promise<void> {
    const insertQuery = `
      INSERT INTO tbl_produto_filter_log (
        APP_ID,
        SYSTEM_CLIENT_ID,
        STORE_ID,
        ORGANIZATION_ID,
        USER_ID,
        USER_NAME,
        USER_ROLE,
        PERSON_ID,
        SEARCH,
        EAN,
        REFERENCE,
        MODEL,
        ID_TAXONOMY,
        ID_TIPO,
        ID_MARCA,
        SUPPLIER_ID,
        FISICO_ID,
        FLAG_BEST_SELLERS,
        FLAG_LOWEST_SELLING,
        FLAG_STALLED_PRODUCT,
        FLAG_LATEST_ARRIVALS,
        FLAG_PRICE_LESS_THAN,
        FLAG_LOW_STOCK,
        FLAG_NO_IMAGE,
        FLAG_NO_DESCRIPTION,
        FLAG_NO_SALES_COPY,
        FLAG_PROMOTION,
        FLAG_FEATURED,
        FLAG_IMPORTED,
        FLAG_INACTIVE,
        FLAG_CONSIGNMENT,
        FLAG_DISCONTINUED,
        FLAG_NO_INVENTORY,
        FLAG_WEBSITE_OFF,
        FLAG_PREMIUM,
        FLAG_ESTOQUE,
        FLAG_SERVICO,
        FLAG_REGISTRATION,
        START_DATE,
        END_DATE,
        QT_REGISTROS,
        PAGINA_ID,
        COLUNA_ID,
        ORDEM_ID,
        QUERYSTRING
      ) VALUES (${Array(45).fill('?').join(', ')})
    `;

    await this.dbService.ModifyExecute(insertQuery, [
      dataJsonDto.pe_app_id ?? 1,
      dataJsonDto.pe_system_client_id,
      dataJsonDto.pe_store_id,
      dataJsonDto.pe_organization_id,
      dataJsonDto.pe_user_id,
      dataJsonDto.pe_user_name,
      dataJsonDto.pe_user_role,
      dataJsonDto.pe_person_id,
      dataJsonDto.pe_search || '',
      dataJsonDto.pe_ean,
      dataJsonDto.pe_reference,
      dataJsonDto.pe_model,
      dataJsonDto.pe_taxonomy_id,
      dataJsonDto.pe_type_id,
      dataJsonDto.pe_brand_id,
      dataJsonDto.pe_supplier_id,
      dataJsonDto.pe_physical_id,
      dataJsonDto.pe_flag_best_sellers,
      dataJsonDto.pe_flag_lowest_selling,
      dataJsonDto.pe_flag_stalled_product,
      dataJsonDto.pe_flag_latest_arrivals,
      dataJsonDto.pe_flag_price_less_than,
      dataJsonDto.pe_flag_low_stock,
      dataJsonDto.pe_flag_no_image,
      dataJsonDto.pe_flag_no_description,
      dataJsonDto.pe_flag_no_sales_copy,
      dataJsonDto.pe_flag_promotion,
      dataJsonDto.pe_flag_featured,
      dataJsonDto.pe_flag_imported,
      dataJsonDto.pe_flag_inactive,
      dataJsonDto.pe_flag_consignment,
      dataJsonDto.pe_flag_discontinued,
      dataJsonDto.pe_flag_no_inventory,
      dataJsonDto.pe_flag_Website_Off ?? null,
      dataJsonDto.pe_flag_Premium ?? null,
      dataJsonDto.pe_flag_stock,
      dataJsonDto.pe_flag_service,
      dataJsonDto.pe_flag_registration,
      dataJsonDto.pe_start_date,
      dataJsonDto.pe_end_date,
      dataJsonDto.pe_records_quantity,
      dataJsonDto.pe_page_id,
      dataJsonDto.pe_column_id,
      dataJsonDto.pe_order_id,
      queryString,
    ]);
  }

  async taskProductFindManagerAllV2(dataJsonDto: ProductFindManagerAllV2Dto) {
    try {
      const queryString = ProductFindManagerAllV2Query(dataJsonDto);

      await this.createProductFindManagerAllFilterLog(dataJsonDto, queryString);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Manager find All'],
        'Product Manager find All not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindManagerSearchV2(
    dataJsonDto: ProductFindManagerSearchV2Dto,
  ) {
    try {
      const queryString = ProductFindManagerSearchV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindManagerAllData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Manager find Search'],
        'Product Manager find Search not found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }

  async taskProductFindManagerIdV2(dataJsonDto: ProductFindManagerIdV2Dto) {
    try {
      const queryString = ProductFindManagerIdV2Query(dataJsonDto);

      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown as SpResultProductFindManagerIdData;

      return processProcedureResultMultiQuery(
        resultData,
        ['Product Manager find Id', 'Related Categories', 'Related Products'],
        'Customer find Allnot found',
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, errorMessage, 0, []);
    }
  }
}
