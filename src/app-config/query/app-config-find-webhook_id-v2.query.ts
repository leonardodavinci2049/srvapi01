import type { AppConfigFindWebhookIdV2Dto } from '../dto/app-config-find-webhook-id-v2.dto';

interface AppConfigFindWebhookIdV2QueryResult {
  queryString: string;
  queryParams: [number];
}

export function AppConfigFindWebhookIdV2Query(
  dataJsonDto: AppConfigFindWebhookIdV2Dto,
): AppConfigFindWebhookIdV2QueryResult {
  const olSystemClientId = dataJsonDto.pe_system_client_id;

  const queryString = `
    SELECT
      tbl_app_config.ID,
      tbl_app_config.APP_NAME,
      tbl_app_config.DOMINIO,
      tbl_app_config.WEBHOOK_APP1,
      tbl_app_config.WEBHOOK_APP2,
      tbl_app_config.WEBHOOK_APP3,
      tbl_app_config.GENERAL_CONFIG_JSON
    FROM tbl_app_config
    WHERE tbl_app_config.ID_SYSTEM_CLIENTE = ?
    LIMIT 1
  `;

  const queryParams: AppConfigFindWebhookIdV2QueryResult['queryParams'] = [
    olSystemClientId,
  ];

  return { queryString, queryParams };
}
