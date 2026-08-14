import { TypeFindManagerIdV2Dto } from '../dto/type-find-manager-id-v2.dto';

interface TypeFindManagerIdV2QueryResult {
  queryString: string;
  queryParams: [number, number, number];
}

export function TypeFindManagerIdV2Query(
  dataJsonDto: TypeFindManagerIdV2Dto,
): TypeFindManagerIdV2QueryResult {
  const queryString = `
    SELECT
      tbl_produto_tipo.ID_TIPO,
      tbl_produto_tipo.TIPO,
      tbl_produto_tipo.SLUG,
      tbl_produto_tipo.PATH_IMAGEM,
      tbl_produto_tipo.INATIVO,
      tbl_produto_tipo.ANOTACOES,
      tbl_produto_tipo.FLAG_CADASTRO_PRODUTO,
      tbl_produto_tipo.TX_COMISSAO_VARE,
      tbl_produto_tipo.TX_COMISSAO_ATAC,
      tbl_produto_tipo.DT_UPDATE,
      tbl_produto_tipo.DT_CADASTRO
    FROM
      tbl_produto_tipo
    WHERE
      tbl_produto_tipo.ID_SYSTEM_CLIENTE = ?
      AND tbl_produto_tipo.ID_LOJA = ?
      AND tbl_produto_tipo.ID_TIPO = ?
    LIMIT 1
  `;

  const queryParams: TypeFindManagerIdV2QueryResult['queryParams'] = [
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_type_id,
  ];

  return { queryString, queryParams };
}
