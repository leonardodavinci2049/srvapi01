import { TypeFindSearchV2Dto } from '../dto/type-find-search-v2.dto';

interface TypeFindSearchV2QueryResult {
  queryString: string;
  queryParams: [string, number, number];
}

export function TypeFindSearchV2Query(
  dataJsonDto: TypeFindSearchV2Dto,
): TypeFindSearchV2QueryResult {
  const queryString = `
    SELECT
      tbl_produto_tipo.ID_TIPO,
      tbl_produto_tipo.TIPO
    FROM
      tbl_produto_tipo
    CROSS JOIN (
      SELECT ? AS pe_search
    ) AS query_params
    WHERE
      tbl_produto_tipo.ID_SYSTEM_CLIENTE = ?
      AND tbl_produto_tipo.ID_LOJA = ?
      AND tbl_produto_tipo.INATIVO = 0
      AND (
        query_params.pe_search IS NULL
        OR TRIM(query_params.pe_search) = ''
        OR (
          query_params.pe_search REGEXP '^[0-9]+$'
          AND (
            tbl_produto_tipo.ID_TIPO = CAST(
              query_params.pe_search AS UNSIGNED
            )
            OR tbl_produto_tipo.TIPO LIKE CONCAT(
              '%',
              query_params.pe_search,
              '%'
            )
          )
        )
        OR (
          query_params.pe_search NOT REGEXP '^[0-9]+$'
          AND tbl_produto_tipo.TIPO LIKE CONCAT(
            '%',
            query_params.pe_search,
            '%'
          )
        )
      )
    ORDER BY
      tbl_produto_tipo.ID_TIPO DESC
    LIMIT 20
  `;

  const queryParams: TypeFindSearchV2QueryResult['queryParams'] = [
    dataJsonDto.pe_search,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
  ];

  return { queryString, queryParams };
}
