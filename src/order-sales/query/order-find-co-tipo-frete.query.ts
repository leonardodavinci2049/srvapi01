import { OrderFindCoTipoFreteDto } from '../dto/order-find-co-tipo-frete.dto';

export function OrderFindCoTipoFreteQuery(
  dataJsonDto: OrderFindCoTipoFreteDto,
): string {
  const queryString = `
    SELECT
      tbl_pedido_tipo_frete.ID_TIPO_FRETE,
      tbl_pedido_tipo_frete.TIPO_FRETE,
      tbl_pedido_tipo_frete.VALOR_PADRAO
    FROM
      tbl_pedido_tipo_frete
    WHERE 1 = 1
      AND tbl_pedido_tipo_frete.INATIVO = 0
    ORDER BY tbl_pedido_tipo_frete.TIPO_FRETE ASC
    LIMIT 10
  `;

  // console.log('Generated Query 1:', queryString);

  return queryString;
}
// AND  tbl_pedido_tipo_frete.ID_SYSTEM_CLIENTE = ${dataJsonDto.pe_system_client_id}
 //     AND tbl_pedido_tipo_frete.ID_LOJA = ${dataJsonDto.pe_store_id}