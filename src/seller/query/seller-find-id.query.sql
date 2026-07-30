SELECT

    tbl_pessoa.ID_TBL_PESSOA AS ID_SELLER,
	tbl_pessoa.ID_LOJA,
    tbl_pessoa.ID_TIPO_CLIENTE,
    CASE tbl_pessoa.ID_TIPO_CLIENTE    
    WHEN  1 THEN 'APROVADA'
    ELSE 'PROCESSANDO'
    END as ACCOUNT_STATUS,
	tbl_pessoa.NOME,
	tbl_pessoa.EMAIL_DE_LOGIN AS EMAIL,   
	tbl_pessoa.FONE1,
    tbl_pessoa.WHATAPP1,
  
	tbl_pessoa.ID_PESSOA_TIPO,
 	CASE tbl_pessoa.ID_PESSOA_TIPO
    WHEN  1 THEN 'PESSOA FÍSICA'
    ELSE 'PESSOA JURÍDICA'   
	END as ACCOUNT_TIPO, 
 
    tbl_pessoa.CPF,
    tbl_pessoa.PRIMEIRO_NOME,
    tbl_pessoa.SOBRENOME,
    tbl_pessoa.PATH_IMAGEM,
    tbl_pessoa.DATADONASCIMENTO,

    tbl_pessoa.CNPJ,
    tbl_pessoa.RAZAO_SOCIAL,
    tbl_pessoa.NOME_FANTASIA,
    tbl_pessoa.INSC_ESTADUAL,
    tbl_pessoa.INSC_MUNICIPAL, 
    tbl_pessoa.NOME_RESPONSAVEL,
    tbl_pessoa.CARGO_RESPONSAVEL,
    tbl_pessoa.ATIVIDADE_PRINCIPAL,

    tbl_pessoa.ID_VENDEDOR,

    tbl_pessoa.CEP,
    tbl_pessoa.ENDERECO,
    tbl_pessoa.ENDERECO_NUMERO,
    tbl_pessoa.COMPLEMENTO,
    tbl_pessoa.BAIRRO,
    tbl_pessoa.CIDADE,
    tbl_pessoa.UF,
    tbl_pessoa.REGIAO_PAIS,
    tbl_pessoa.PAIS,
    tbl_pessoa.COD_MUNICIPIO,
    tbl_pessoa.COD_UF,

	tbl_pessoa_internet.WEBSITE,
	tbl_pessoa_internet.FACEBOOK,
	tbl_pessoa_internet.TWITTER,
	tbl_pessoa_internet.LINKEDIN,
	tbl_pessoa_internet.INSTAGRAM,
	tbl_pessoa_internet.TIKTOK,
	tbl_pessoa_internet.TELEGRAM,    

    tbl_pessoa.VENDEDOR,
    tbl_pessoa.DATADOCADASTRO    
FROM
 tbl_pessoa
LEFT JOIN tbl_pessoa_internet ON tbl_pessoa_internet.ID_PESSOA = tbl_pessoa.ID_TBL_PESSOA
WHERE tbl_pessoa.ID_SYSTEM_CLIENTE = PE_SYSTEM_CLIENT_ID
AND tbl_pessoa.ID_TBL_PESSOA = PE_CUSTOMER_ID 
LIMIT 1;