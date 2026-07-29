import { SellerFindSearchV2Dto } from '../dto/seller-find-search-v2.dto';

interface SellerFindSearchV2QueryResult {
  queryString: string;
  queryParams: [string, number, number];
}

export function SellerFindSearchV2Query(
  dataJsonDto: SellerFindSearchV2Dto,
): SellerFindSearchV2QueryResult {
  const queryString = `
    SELECT
      tbl_pessoa.ID_TBL_PESSOA AS ID_CUSTOMER,
      tbl_pessoa.ID_TIPO_CLIENTE,
      tbl_pessoa.ID_PESSOA_TIPO,
      tbl_pessoa.NOME,
      tbl_pessoa.FONE1,
      tbl_pessoa.WHATAPP1,
      tbl_pessoa.RAZAO_SOCIAL,
      tbl_pessoa.CIDADE,
      tbl_pessoa.CPF,
      tbl_pessoa.CNPJ,
      CASE tbl_pessoa.ID_TIPO_CLIENTE
        WHEN 1 THEN 'ATACADO'
        WHEN 2 THEN 'VAREJO'
        ELSE 'NÃO INFORMADO'
      END AS TIPO_CLIENTE,
      CASE tbl_pessoa.ID_PESSOA_TIPO
        WHEN 1 THEN 'PESSOA FÍSICA'
        WHEN 2 THEN 'PESSOA JURÍDICA'
        ELSE 'NÃO INFORMADO'
      END AS TIPO_PESSOA,
      tbl_pessoa.EMAIL_DE_LOGIN AS EMAIL,
      tbl_pessoa.PATH_IMAGEM,
      CASE
        WHEN tbl_pessoa.DT_ULTIMA_COMPRA >= '2020-01-01'
          THEN tbl_pessoa.DT_ULTIMA_COMPRA
        ELSE NULL
      END AS ULTIMA_COMPRA,
      DATE(tbl_pessoa.DATADOCADASTRO) AS DATA_CADASTRO
    FROM
      tbl_pessoa
    CROSS JOIN (
      SELECT ? AS pe_search
    ) AS query_params
    WHERE
      tbl_pessoa.ID_SYSTEM_CLIENTE = ?
      AND tbl_pessoa.ID_LOJA = ?
      AND tbl_pessoa.INATIVO = 0
      AND tbl_pessoa.VENDEDOR = 1
      AND (
        query_params.pe_search IS NULL
        OR TRIM(query_params.pe_search) = ''
        OR (
          query_params.pe_search REGEXP '^[0-9]+$'
          AND tbl_pessoa.ID_TBL_PESSOA = CAST(
            query_params.pe_search AS UNSIGNED
          )
        )
        OR tbl_pessoa.NOME LIKE CONCAT('%', query_params.pe_search, '%')
        OR tbl_pessoa.RAZAO_SOCIAL LIKE CONCAT(
          '%',
          query_params.pe_search,
          '%'
        )
        OR tbl_pessoa.CPF LIKE CONCAT('%', query_params.pe_search, '%')
        OR tbl_pessoa.CNPJ LIKE CONCAT('%', query_params.pe_search, '%')
        OR tbl_pessoa.FONE1 LIKE CONCAT('%', query_params.pe_search, '%')
        OR tbl_pessoa.WHATAPP1 LIKE CONCAT('%', query_params.pe_search, '%')
        OR tbl_pessoa.EMAIL_DE_LOGIN LIKE CONCAT(
          '%',
          query_params.pe_search,
          '%'
        )
      )
    ORDER BY
      tbl_pessoa.ID_TBL_PESSOA DESC
    LIMIT 20
  `;

  const queryParams: SellerFindSearchV2QueryResult['queryParams'] = [
    dataJsonDto.pe_search,
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
  ];

  return { queryString, queryParams };
}
