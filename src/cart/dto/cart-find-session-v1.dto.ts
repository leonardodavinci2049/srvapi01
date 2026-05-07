import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CartFindSessionV1Dto {
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

  @ApiProperty({ description: 'Session Cart ID', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  pe_session_cart_id!: string;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  @IsNotEmpty()
  pe_business_type!: number;

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
    "pe_session_cart_id": "SESSION123",
  "pe_business_type": 3
}

*/

/*

//  the json below is a sample response from the CartFindSessionV1Query, showing the details of a cart and its items. It includes the status code, message, record ID, cart details, and cart items.


{
    "statusCode": 100200,
    "message": "Informações processadas com sucesso",
    "recordId": 5,
    "data": {
        "Cart Details": [
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
            }
        ],
        "Cart Items": [
            {
                "ID_MOVIMENTO": 9,
                "ID_CARRINHO": 5,
                "SESSION_CART_ID": "SESSION123",
                "ID_PRODUTO": 51373,
                "SKU": 51373,
                "PRODUTO": "FONTE ATX GAMER 650W AZZA PSAZ BRONZE 80 PLUS",
                "QT": 2,
                "ESTOQUE": 5,
                "VL_UNITARIO": "375.000000",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/16/b3c2d940-7df9-4464-aa43-fd4b8948fadc/fonte-atx-gamer-650w-azza-psaz-bronze-80-plus-main-original.jpg",
                "SLUG": "fonte-atx-gamer-650w-azza-psaz-bronze-80-plus"
            },
            {
                "ID_MOVIMENTO": 10,
                "ID_CARRINHO": 5,
                "SESSION_CART_ID": "SESSION123",
                "ID_PRODUTO": 54883,
                "SKU": 54883,
                "PRODUTO": "FONTE ATX ALIMENTAÇÃO 600W AUTOSWITCH ONE POWER",
                "QT": 3,
                "ESTOQUE": 13,
                "VL_UNITARIO": "200.000000",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/30d704df-5a14-49b7-b5a1-e1c170b2f52a/fonte-atx-alimentacao-600w-autoswitch-one-power-main-original.jpg",
                "SLUG": "fonte-atx-alimentacao-600w-autoswitch-one-power"
            }
        ]
    },
    "quantity": 3,
    "errorId": 0,
    "info1": ""
}

*/