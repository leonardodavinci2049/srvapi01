SELECT 
	tbl_pedido_tipo_frete.ID_TIPO_FRETE,
	tbl_pedido_tipo_frete.TIPO_FRETE,
	tbl_pedido_tipo_frete.VALOR_PADRAO
FROM 
tbl_pedido_tipo_frete
WHERE tbl_pedido_tipo_frete.ID_SYSTEM_CLIENTE = 1
AND tbl_pedido_tipo_frete.ID_SYSTEM_CLIENTE = 1
AND  tbl_pedido_tipo_frete.INATIVO = 0
ORDER BY tbl_pedido_tipo_frete.TIPO_FRETE ASC LIMIT 10;

order-find-co-TIPO_FRETE.dto.ts

order-find-co-pg-forma-id.dto.ts