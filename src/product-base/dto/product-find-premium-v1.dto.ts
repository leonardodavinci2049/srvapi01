import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ProductFindPremiumV1Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsNotEmpty()
  @IsString()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id!: number;

  @ApiProperty({ description: 'Search', maxLength: 300 })
  @IsString()
  @IsOptional()
  pe_search?: string;

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNumber()
  @IsOptional()
  pe_taxonomy_id?: number;

  @ApiProperty({ description: 'Type ID' })
  @IsNumber()
  @IsOptional()
  pe_Type_id?: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  @IsOptional()
  pe_brand_id?: number;

  @ApiProperty({ description: 'Stock Flag' })
  @IsNumber()
  @IsOptional()
  pe_stock_flag?: number;

  @ApiProperty({ description: 'Service Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Service?: number;

  @ApiProperty({ description: 'Promotions Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Promotions?: number;

  @ApiProperty({ description: 'Highlight Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Highlight?: number;

  @ApiProperty({ description: 'Launch Flag' })
  @IsNumber()
  @IsOptional()
  pe_flag_Launch?: number;

  @ApiProperty({ description: 'Quantity of Records' })
  @IsNumber()
  @IsOptional()
  pe_records_quantity?: number;

  @ApiProperty({ description: 'Page ID' })
  @IsNumber()
  @IsOptional()
  pe_pageId?: number;

  @ApiProperty({ description: 'Column ID' })
  @IsNumber()
  @IsOptional()
  pe_columnId?: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  pe_orderId?: number;
}
/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
    "pe_search": "TECLADO",
    "pe_taxonomy_id": 123,
    "pe_Type_id": 0,
    "pe_brand_id": 0,

    "pe_stock_flag": 0,
    "pe_flag_Service": 0,

    "pe_flag_Promotions": 0,
    "pe_flag_Highlight": 0,
    "pe_flag_Launch":0,

    "pe_records_quantity": 2,
    "pe_pageId": 1,
    "pe_columnId": 2,
    "pe_orderId": 3


*/

/*Sample JSON for testing in body endpoint:

{
    "statusCode": 100200,
    "message": "Dados carregados com sucesso.",
    "recordId": 1,
    "data": {
        "Product find Premium V1": [
            {
                "ID_PRODUTO": 54562,
                "SKU": 54562,
                "PRODUTO": "TECLADO SEM FIO BLUETOOTH K-BT50BK C3 TECH PRETO",
                "DESCRICAO_TAB": "",
                "ETIQUETA": "TECLADO S/FIO BLUETO",
                "REF": "K-BT50BK C3 TECH",
                "MODELO": "TECLADO S/FIO BLUETO",
                "ID_TIPO": 1,
                "TIPO": "ELETRÔNICOS",
                "ID_MARCA": 1,
                "MARCA": "NONE",
                "ID_IMAGEM": 0,
                "PATH_IMAGEM_MARCA": "",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/752b8e12-915e-4cb0-9545-7e33eb4207e3/teclado-sem-fio-bluetooth-k-bt50bk-c3-tech-preto-main-original.jpg",
                "PATH_PAGE": "https://mundialmegastore.com.br/product/teclado-sem-fio-bluetooth-k-bt50bk-c3-tech-preto-54562",
                "SLUG": "teclado-sem-fio-bluetooth-k-bt50bk-c3-tech-preto",
                "ESTOQUE_LOJA": 2,
                "VL_ATACADO": "92.000000",
                "VL_CORPORATIVO": "95.000000",
                "VL_VAREJO": "99.000000",
                "TX_PRODUTO_LOJA": "0.000000",
                "OURO": "92.000000",
                "PRATA": "95.000000",
                "BRONZE": "99.000000",
                "DECONTO": "0.000000",
                "TEMPODEGARANTIA_MES": 6,
                "TEMPODEGARANTIA_DIA": 0,
                "DESCRICAO_VENDA": "",
                "IMPORTADO": 2,
                "PROMOCAO": 0,
                "LANCAMENTO": 0,
                "CATEGORIAS": "[{\"ID_TAXONOMY\": 2836, \"TAXONOMIA\": \"TECLADO SEM FIO\"},{\"ID_TAXONOMY\": 1160, \"TAXONOMIA\": \"TECLADO\"},{\"ID_TAXONOMY\": 187, \"TAXONOMIA\": \"ELETRÔNICOS\"}]",
                "DATADOCADASTRO": "2024-01-12T18:31:41.000Z"
            },
            {
                "ID_PRODUTO": 54991,
                "SKU": 54991,
                "PRODUTO": "TECLADO E MOUSE USB MK120 LOGITECH PRETO",
                "DESCRICAO_TAB": "",
                "ETIQUETA": "TECLADO E MOUSE MK12",
                "REF": "USB LOGITECH PRETO",
                "MODELO": "TECLADO E MOUSE MK12",
                "ID_TIPO": 1,
                "TIPO": "ELETRÔNICOS",
                "ID_MARCA": 1,
                "MARCA": "NONE",
                "ID_IMAGEM": 0,
                "PATH_IMAGEM_MARCA": "",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/9463d2f9-b9c0-4d37-8d51-9097a840e2ad/teclado-e-mouse-usb-mk120-logitech-preto-main-original.jpg",
                "PATH_PAGE": "https://mundialmegastore.com.br/product/teclado-e-mouse-usb-mk120-logitech-preto-54991",
                "SLUG": "teclado-e-mouse-usb-mk120-logitech-preto",
                "ESTOQUE_LOJA": 3,
                "VL_ATACADO": "145.000000",
                "VL_CORPORATIVO": "150.000000",
                "VL_VAREJO": "156.000000",
                "TX_PRODUTO_LOJA": "0.000000",
                "OURO": "145.000000",
                "PRATA": "150.000000",
                "BRONZE": "156.000000",
                "DECONTO": "0.000000",
                "TEMPODEGARANTIA_MES": 6,
                "TEMPODEGARANTIA_DIA": 0,
                "DESCRICAO_VENDA": null,
                "IMPORTADO": 2,
                "PROMOCAO": 0,
                "LANCAMENTO": 0,
                "CATEGORIAS": "[{\"ID_TAXONOMY\": 3337, \"TAXONOMIA\": \"TECLADO E MOUSE\"},{\"ID_TAXONOMY\": 1160, \"TAXONOMIA\": \"TECLADO\"},{\"ID_TAXONOMY\": 187, \"TAXONOMIA\": \"ELETRÔNICOS\"}]",
                "DATADOCADASTRO": "2024-07-30T17:10:50.000Z"
            }
        ]
    },
    "quantity": 2,
    "errorId": 0,
    "info1": ""
}

*/