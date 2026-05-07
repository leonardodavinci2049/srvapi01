import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductWebFindV3Dto {
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

  @ApiProperty({
    description: 'Search Term',
    maxLength: 300,
    example: 'produto-exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_search?: string;

  @ApiProperty({ description: 'Taxonomy ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_taxonomy_id?: number;

  @ApiProperty({ description: 'Brand ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_brand_id?: number;

  @ApiProperty({ description: 'Stock Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_stock_flag?: number;

  @ApiProperty({
    description: 'Number of Records',
    example: 10,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_record_count?: number;

  @ApiProperty({ description: 'Page ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_page_id?: number;

  @ApiProperty({ description: 'Column ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_column_id?: number;

  @ApiProperty({ description: 'Order ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_order_id?: number;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_search": "sample-product",
  "pe_taxonomy_id": 1,
  "pe_brand_id": 1,
  "pe_stock_flag": 1,
  "pe_record_count": 10,
  "pe_page_id": 1,
  "pe_column_id": 1,
  "pe_order_id": 1
}
*/


/* 

 Sample response from the ProductWebFindV3Query:

{
    "statusCode": 100200,
    "message": "Produtos carregado com sucesso",
    "recordId": 2,
    "data": {
        "Product List": [
            {
                "ID_PRODUTO": 55058,
                "SKU": 55058,
                "PRODUTO": "ADAPTADOR BLUETOOTH 5.0 USB 2.0/3.0 PC/NOTE",
                "DESCRICAO_TAB": "",
                "ETIQUETA": "ADAPTADOR BLUETOOTH",
                "REF": "5.0 USB 2.0/3.0 PC/N",
                "MODELO": "ADAPTADOR BLUETOOTH",
                "TIPO": "ELETRÔNICOS",
                "MARCA": "NONE",
                "PATH_IMAGEM_MARCA": "",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/ce7fdd78-6b50-4700-a3c5-be3e72392899/adaptador-bluetooth-50-usb-2030-pcnote-main-original.jpg",
                "SLUG": "adaptador-bluetooth-5-0-usb-2-0-3-0-pc-note",
                "ESTOQUE_LOJA": 0,
                "OURO": "20.000000",
                "PRATA": "23.000000",
                "BRONZE": "25.000000",
                "VL_ATACADO": "20.000000",
                "VL_CORPORATIVO": "23.000000",
                "VL_VAREJO": "25.000000",
                "DECONTO": "0.000000",
                "TEMPODEGARANTIA_DIA": 0,
                "DESCRICAO_VENDA": null,
                "IMPORTADO": 2,
                "PROMOCAO": 0,
                "LANCAMENTO": 0,
                "DATADOCADASTRO": "2024-09-03T18:15:47.000Z"
            },
            {
                "ID_PRODUTO": 50977,
                "SKU": 50977,
                "PRODUTO": "ADAPTADOR BLUETOOTH 5.0 USB 2.0/3.0 PC/NOTE JC-BLU04",
                "DESCRICAO_TAB": "ADAPTADOR BLUETOOTH 5.0 USB 2.0/3.0 PC/NOTE JC-BLU04",
                "ETIQUETA": "ADAP BLUETOOTH",
                "REF": "JC-BLU04",
                "MODELO": "ADAP BLUETOOTH",
                "TIPO": "ELETRÔNICOS",
                "MARCA": "NONE",
                "PATH_IMAGEM_MARCA": "",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/16/a0b3167e-0599-40d6-8154-7bfd6678f12d/adaptador-bluetooth-50-usb-2030-pcnote-jc-blu04-main-original.jpg",
                "SLUG": "adaptador-bluetooth-5-0-usb-2-0-3-0-pc-note-jc-blu04",
                "ESTOQUE_LOJA": 8,
                "OURO": "33.000000",
                "PRATA": "36.000000",
                "BRONZE": "38.000000",
                "VL_ATACADO": "33.000000",
                "VL_CORPORATIVO": "36.000000",
                "VL_VAREJO": "38.000000",
                "DECONTO": "0.000000",
                "TEMPODEGARANTIA_DIA": 0,
                "DESCRICAO_VENDA": "",
                "IMPORTADO": 2,
                "PROMOCAO": 0,
                "LANCAMENTO": 0,
                "DATADOCADASTRO": "2021-02-01T14:39:15.000Z"
            }
        ]
    },
    "quantity": 2,
    "errorId": 0,
    "info1": ""
}


*/