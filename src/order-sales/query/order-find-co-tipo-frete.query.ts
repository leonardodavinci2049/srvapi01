import { OrderFindCoTipoFreteDto } from '../dto/order-find-co-tipo-frete.dto';

export function OrderFindCoTipoFreteQuery(
  dataJsonDto: OrderFindCoTipoFreteDto,
): string {
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;

  const queryString = `
    SELECT
      tbl_pedido_tipo_frete.ID_TIPO_FRETE,
      tbl_pedido_tipo_frete.TIPO_FRETE,
      tbl_pedido_tipo_frete.VALOR_PADRAO
    FROM
      tbl_pedido_tipo_frete
    WHERE 1 = 1
      AND tbl_pedido_tipo_frete.ID_SYSTEM_CLIENTE = ${olSystemClientId}
      AND tbl_pedido_tipo_frete.ID_LOJA = ${olStoreId}
      AND tbl_pedido_tipo_frete.INATIVO = 0
      AND tbl_pedido_tipo_frete.FLAG_WEB_OFF = 0    
    ORDER BY tbl_pedido_tipo_frete.TIPO_FRETE ASC
    LIMIT 10
  `;

  // console.log('Generated Query 1:', queryString);

  return queryString;
}
