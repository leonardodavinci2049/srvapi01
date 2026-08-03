import { CarrierFindManagerIdV2Dto } from '../dto/carrier-find-manager-id-v2.dto';

interface CarrierFindManagerIdV2QueryResult {
  queryString: string;
  queryParams: [number, number, number];
}

export function CarrierFindManagerIdV2Query(
  dataJsonDto: CarrierFindManagerIdV2Dto,
): CarrierFindManagerIdV2QueryResult {
  const queryString = `
    SELECT
      tbl_transportadora.ID_TRANSPORTADORA,
      tbl_transportadora.NOME,
      tbl_transportadora.ID_PESSOA_TIPO,
      CASE
        WHEN tbl_transportadora.ID_PESSOA_TIPO = 1 THEN 'PESSOA FÍSICA'
        ELSE 'PESSOA JURÍDICA'
      END AS TIPO_PESSOA,
      tbl_transportadora.FONE1,
      tbl_transportadora.WHATAPP1,
      tbl_transportadora.CONTATO1,
      tbl_transportadora.EMAIL1,
      tbl_transportadora.PATH_IMAGEM,
      tbl_transportadora.RAZAO_SOCIAL,
      tbl_transportadora.CNPJ,
      tbl_transportadora.DATA_CNPJ,
      tbl_transportadora.INSC_ESTADUAL,
      tbl_transportadora.INSC_MUNICIPAL,
      tbl_transportadora.NOME_FANTASIA,
      tbl_transportadora.NOME_RESPONSAVEL,
      tbl_transportadora.CARGO,
      tbl_transportadora.CPF,
      tbl_transportadora.RG,
      tbl_transportadora.CEP,
      tbl_transportadora.ENDERECO,
      tbl_transportadora.ENDERECO_NUMERO,
      tbl_transportadora.COMPLEMENTO,
      tbl_transportadora.BAIRRO,
      tbl_transportadora.CIDADE,
      tbl_transportadora.UF,
      tbl_transportadora.REGIAO_PAIS,
      tbl_transportadora.PAIS,
      tbl_transportadora.COD_MUNICIPIO,
      tbl_transportadora.COD_UF,
      tbl_transportadora.WEBSITE,
      tbl_transportadora.FACEBOOK,
      tbl_transportadora.TWITTER,
      tbl_transportadora.FRETADOR,
      tbl_transportadora.DT_ULTIMA_COMPRA,
      tbl_transportadora.ANOTACOES,
      tbl_transportadora.INATIVO,
      tbl_transportadora.DATADOCADASTRO
    FROM
      tbl_transportadora
    WHERE
      tbl_transportadora.ID_SYSTEM_CLIENTE = ?
      AND tbl_transportadora.ID_LOJA = ?
      AND tbl_transportadora.ID_TRANSPORTADORA = ?
    LIMIT 1
  `;

  const queryParams: CarrierFindManagerIdV2QueryResult['queryParams'] = [
    dataJsonDto.pe_system_client_id,
    dataJsonDto.pe_store_id,
    dataJsonDto.pe_carrier_id,
  ];

  return { queryString, queryParams };
}
