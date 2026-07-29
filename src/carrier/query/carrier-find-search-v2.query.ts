import { CarrierFindSearchV2Dto } from '../dto/carrier-find-search-v2.dto';

interface CarrierFindSearchV2QueryResult {
  queryString: string;
  queryParams: [string, number, number];
}

export function CarrierFindSearchV2Query(
  dataJsonDto: CarrierFindSearchV2Dto,
): CarrierFindSearchV2QueryResult {
  const queryString = `
    SELECT
      tbl_transportadora.ID_TRANSPORTADORA,
      tbl_transportadora.ID_PESSOA_TIPO,
      CASE
        WHEN tbl_transportadora.ID_PESSOA_TIPO = 1 THEN 'PESSOA FÍSICA'
        ELSE 'PESSOA JURÍDICA'
      END AS TIPO_PESSOA,
      tbl_transportadora.NOME,
      tbl_transportadora.FONE1,
      tbl_transportadora.WHATAPP1,
      tbl_transportadora.EMAIL1,
      tbl_transportadora.WEBSITE,
      tbl_transportadora.CNPJ,
      tbl_transportadora.RAZAO_SOCIAL,
      tbl_transportadora.NOME_RESPONSAVEL,
      tbl_transportadora.CPF,
      tbl_transportadora.PATH_IMAGEM,
      tbl_transportadora.CREATEDAT
    FROM
      tbl_transportadora
    CROSS JOIN (
      SELECT ? AS pe_search
    ) AS query_params
    WHERE
      tbl_transportadora.ID_SYSTEM_CLIENTE = ?
      AND tbl_transportadora.ID_LOJA = ?
      AND tbl_transportadora.INATIVO = 0
      AND (
        query_params.pe_search IS NULL
        OR TRIM(query_params.pe_search) = ''
        OR (
          query_params.pe_search REGEXP '^[0-9]+$'
          AND (
            tbl_transportadora.ID_TRANSPORTADORA = CAST(
              query_params.pe_search AS UNSIGNED
            )
            OR tbl_transportadora.NOME LIKE CONCAT(
              '%',
              query_params.pe_search,
              '%'
            )
          )
        )
        OR (
          query_params.pe_search NOT REGEXP '^[0-9]+$'
          AND tbl_transportadora.NOME LIKE CONCAT(
            '%',
            query_params.pe_search,
            '%'
          )
        )
      )
    ORDER BY
      tbl_transportadora.ID_TRANSPORTADORA DESC
    LIMIT 20
  `;

  const queryParams: CarrierFindSearchV2QueryResult['queryParams'] = [
    dataJsonDto.pe_search,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
  ];

  return { queryString, queryParams };
}
