import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductWebSectionsV3Dto {
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

  @ApiProperty({ description: 'Type ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_type_id?: number;

  @ApiProperty({ description: 'Promotions Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_promotions?: number;

  @ApiProperty({ description: 'Highlight Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_flag_highlight?: number;

  @ApiProperty({ description: 'Launch Flag', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_launch_flag?: number;

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

  "pe_taxonomy_id": 29014,
  "pe_brand_id": 0,
  "pe_type_id": 0,

  "pe_flag_promotions": 0,
  "pe_flag_highlight": 0,
  "pe_launch_flag": 0,

  "pe_record_count": 2,
  "pe_page_id": 0,
  "pe_column_id": 2,
  "pe_order_id": 1
}
*/


/*

Sample response from the  ProductWebSectionsV3Query:


{
    "statusCode": 100200,
    "message": "Produtos carregado com sucesso",
    "recordId": 2,
    "data": {
        "Product Sections": [
            {
                "ID_TAXONOMY": 2629,
                "ID_PRODUTO": 54500,
                "SKU": 54500,
                "PRODUTO": "PERFUME ARMAF CLUB DE NUIT INTENSE EDT MASCULINO 105ML ARABE",
                "DESCRICAO_TAB": "PERFUME ARMAF CLUB DE NUIT INTENSE",
                "ETIQUETA": "ARMAF CLUB DE NUIT",
                "REF": "INTENSE MASCULINO 105ML",
                "MODELO": "ARMAF CLUB DE NUIT",
                "TIPO": "PERFUMARIA",
                "MARCA": "NONE",
                "PATH_IMAGEM_MARCA": "",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/61832b5c-6659-4b00-ac17-b0aee3d93c2a/perfume-armaf-club-de-nuit-intense-edt-masculino-105ml-arabe-main-original.jpg",
                "SLUG": "perfume-armaf-club-de-nuit-intense-edt-masculino-105ml-arabe",
                "ESTOQUE_LOJA": 32,
                "OURO": "196.000000",
                "PRATA": "227.000000",
                "BRONZE": "250.000000",
                "VL_ATACADO": "196.000000",
                "VL_CORPORATIVO": "227.000000",
                "VL_VAREJO": "250.000000",
                "DECONTO": "0.000000",
                "TEMPODEGARANTIA_DIA": 0,
                "DESCRICAO_VENDA": "",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0,
                "DATADOCADASTRO": "2023-11-28T18:13:29.000Z"
            },
            {
                "ID_TAXONOMY": 2629,
                "ID_PRODUTO": 54364,
                "SKU": 54364,
                "PRODUTO": "PERFUME LATTAFA ASAD PRETO MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME ASAD",
                "ETIQUETA": "LATTAFA ASAD PRETO",
                "REF": "MASCULINO EDP 100ML ",
                "MODELO": "LATTAFA ASAD PRETO",
                "TIPO": "PERFUMARIA",
                "MARCA": "NONE",
                "PATH_IMAGEM_MARCA": "",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/16/4fb188d1-a47d-4627-9461-3347aa843719/perfume-lattafa-asad-preto-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-lattafa-asad-preto-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 28,
                "OURO": "184.000000",
                "PRATA": "206.000000",
                "BRONZE": "228.000000",
                "VL_ATACADO": "184.000000",
                "VL_CORPORATIVO": "206.000000",
                "VL_VAREJO": "228.000000",
                "DECONTO": "0.000000",
                "TEMPODEGARANTIA_DIA": 0,
                "DESCRICAO_VENDA": "",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0,
                "DATADOCADASTRO": "2023-09-30T15:54:12.000Z"
            }
        ]
    },
    "quantity": 2,
    "errorId": 0,
    "info1": ""
}



*/