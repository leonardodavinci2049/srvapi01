DROP PROCEDURE IF EXISTS sp_brand_find_all_v2;
DELIMITER $$
CREATE  PROCEDURE sp_brand_find_all_v2(
							PE_APP_ID INT, 
							PE_SYSTEM_CLIENT_ID INT,
							PE_STORE_ID INT,
							PE_ORGANIZATION_ID varchar(200),
							PE_USER_ID varchar(200),	
							PE_USER_NAME varchar(200),    						
							PE_USER_ROLE varchar(200),                            
							PE_PERSON_ID INT,    
							PE_SEARCH VARCHAR(100),
							PE_INATIVO INT,  
							PE_LIMIT INT 
                        )
main_block: begin
    DECLARE sp_return_id INT DEFAULT 0;
    DECLARE sp_message VARCHAR(500) DEFAULT '';
    DECLARE sp_error_id INT DEFAULT 0;
    
 IF ( (PE_SYSTEM_CLIENT_ID IS NULL)  OR (PE_SYSTEM_CLIENT_ID < 1)) THEN
        SET sp_return_id = 0;
        SET sp_message = 'Erro! Informe um ID system';
        SET sp_error_id = 1;
        
        SELECT
            sp_return_id,
            sp_message,
            sp_error_id;
        LEAVE main_block;
    END IF;
    
    SELECT
		tbl_produto_marca.ID_MARCA,
		coalesce(tbl_produto_marca.MARCA, tbl_produto_marca.NOME) AS MARCA, 
		tbl_produto_marca.SLUG,
		tbl_produto_marca.PATH_IMAGEM,
		tbl_produto_marca.INATIVO,
		tbl_produto_marca.DATADOCADASTRO
    FROM
        tbl_produto_marca
	WHERE  tbl_produto_marca.ID_SYSTEM_CLIENTE = PE_SYSTEM_CLIENT_ID  
	
      AND (
        
        (PE_SEARCH IS NULL OR TRIM(PE_SEARCH) = '')
        OR
        
        (PE_SEARCH REGEXP '^[0-9]+$' AND (
            tbl_produto_marca.ID_MARCA = CAST(PE_SEARCH AS UNSIGNED)
            OR tbl_produto_marca.MARCA LIKE CONCAT('%', PE_SEARCH, '%')
			OR tbl_produto_marca.NOME LIKE CONCAT('%', PE_SEARCH, '%')         
        ))
        OR
        
        (PE_SEARCH NOT REGEXP '^[0-9]+$' AND (
            tbl_produto_marca.MARCA LIKE CONCAT('%', PE_SEARCH, '%')
            OR tbl_produto_marca.NOME LIKE CONCAT('%', PE_SEARCH, '%')
        ))
    )      
    
	AND (PE_INATIVO IS NULL OR PE_INATIVO <= 0 OR tbl_produto_marca.INATIVO = PE_INATIVO)    
    order by
     tbl_produto_marca.ID_MARCA DESC
    LIMIT PE_LIMIT;   
 
	SET sp_return_id = 1;
	SET sp_message = 'Dados carregados com sucesso.';
	SET sp_error_id = 0;

    SELECT
        sp_return_id,
        sp_message,
        sp_error_id;
end$$
DELIMITER ;
