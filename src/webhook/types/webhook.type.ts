/** Campos de `tbl_app_config` que podem conter URLs de webhook. */
export const WEBHOOK_SOURCE_FIELDS = [
  'webhookApp1',
  'webhookApp2',
  'webhookApp3',
] as const;

export type WebhookSourceField = (typeof WEBHOOK_SOURCE_FIELDS)[number];

/** Códigos sanitizados de falha, sem detalhes da rede ou do receptor. */
export type WebhookErrorCode = 'TIMEOUT' | 'NETWORK_ERROR' | 'HTTP_ERROR';

/** Resultado por endpoint acionado, sem dados sensíveis. */
export interface WebhookDispatchResult {
  field: WebhookSourceField;
  url: string;
  success: boolean;
  status: number | null;
  error?: WebhookErrorCode;
}

/** Envelope do endpoint de teste. */
export interface WebhookTestTriggerResponse {
  success: boolean;
  message: string;
  results: WebhookDispatchResult[];
}
