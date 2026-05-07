import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CartFindAllV1Dto {
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

  @ApiProperty({ description: 'Search', maxLength: 200 })
  @IsString()
  @IsOptional()
  pe_search!: string;

  @ApiProperty({ description: 'Status ID' })
  @IsNumber()
  @IsOptional()
  pe_status_id!: number;

  @ApiProperty({ description: 'Start Date', maxLength: 10 })
  @IsString()
  @IsOptional()
  pe_start_date!: string;

  @ApiProperty({ description: 'End Date', maxLength: 10 })
  @IsString()
  @IsOptional()
  pe_end_date!: string;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsNotEmpty()
  pe_limit!: number;
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

  "pe_search": "",
  "pe_status_id": 0,
  "pe_start_date": "2026-01-01",
  "pe_end_date": "2026-12-31",
  "pe_limit": 10  
}

*/

/*

/* Sample response from the CartFindAllV1Query:
{
    "statusCode": 100200,
    "message": "Informações processadas com sucesso",
    "recordId": "0",
    "data": {
        "Cart List": [
            {
                "ID_CARRINHO": 5,
                "SESSION_CART_ID": "SESSION123",
                "TYPE_BUSINESS": 3,
                "PUBLIC_CODE": null,
                "CEP": "12345",
                "CUSTUMER_NAME": null,
                "ID_STATUS": 1,
                "STATUS_CART": "OPEN",
                "TIPO_FRETE": "1",
                "TIPO": "E-COMMERCE",
                "PG_FORMA_ID": 1,
                "PG_FORMA": "DINHEIRO",
                "VL_FRETE": "0.0000",
                "PRECO_TIPO": "VAREJO",
                "VL_DESCONTO": "0.00",
                "CREATEDAT": "2026-05-06T18:14:58.000Z"
            },
            {
                "ID_CARRINHO": 4,
                "SESSION_CART_ID": "19372846-JKL",
                "TYPE_BUSINESS": 3,
                "PUBLIC_CODE": null,
                "CEP": "1777559459",
                "CUSTUMER_NAME": null,
                "ID_STATUS": 2,
                "STATUS_CART": "CLOSED",
                "TIPO_FRETE": "1",
                "TIPO": "E-COMMERCE",
                "PG_FORMA_ID": 1,
                "PG_FORMA": "DINHEIRO",
                "VL_FRETE": "0.0000",
                "PRECO_TIPO": "VAREJO",
                "VL_DESCONTO": "0.00",
                "CREATEDAT": "2026-04-30T14:30:59.000Z"
            },
            {
                "ID_CARRINHO": 3,
                "SESSION_CART_ID": "19372846-KK",
                "TYPE_BUSINESS": 3,
                "PUBLIC_CODE": "AAAAAA",
                "CEP": "1777558304",
                "CUSTUMER_NAME": "Leonardo 2",
                "ID_STATUS": 1,
                "STATUS_CART": "OPEN",
                "TIPO_FRETE": "1",
                "TIPO": "INTEGRAL",
                "PG_FORMA_ID": 2,
                "PG_FORMA": "PIX",
                "VL_FRETE": "0.0000",
                "PRECO_TIPO": "VAREJO",
                "VL_DESCONTO": "0.00",
                "CREATEDAT": "2026-04-30T14:11:44.000Z"
            },
            {
                "ID_CARRINHO": 2,
                "SESSION_CART_ID": "19372846",
                "TYPE_BUSINESS": 3,
                "PUBLIC_CODE": null,
                "CEP": "1777481020",
                "CUSTUMER_NAME": null,
                "ID_STATUS": 1,
                "STATUS_CART": "OPEN",
                "TIPO_FRETE": "STORE",
                "TIPO": "E-COMMERCE",
                "PG_FORMA_ID": 1,
                "PG_FORMA": "DINHEIRO",
                "VL_FRETE": "0.0000",
                "PRECO_TIPO": "VAREJO",
                "VL_DESCONTO": "0.00",
                "CREATEDAT": "2026-04-29T16:43:40.000Z"
            }
        ]
    },
    "quantity": 4,
    "errorId": 0,
    "info1": ""
}


*/