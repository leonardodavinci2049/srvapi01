import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CartItemUpdQtV1Dto {
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

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_product_id!: number;

  @ApiProperty({ description: 'Item Quantity' })
  @IsNumber()
  @IsNotEmpty()
  pe_item_quantity!: number;
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
  "pe_product_id": 12345,
  "pe_item_quantity": 5    
}

*/

/* Sample response from the CartItemUpdQtV1Query:


{
    "statusCode": 100200,
    "message": "Cadastro atualizado com sucesso.",
    "recordId": 5,
    "data": [
        {
            "sp_return_id": 5,
            "sp_message": "Cadastro atualizado com sucesso.",
            "sp_error_id": 0
        }
    ],
    "quantity": 1,
    "errorId": 0,
    "info1": ""
}

// or, in case of an error (e.g., insufficient stock):

{
    "statusCode": 100422,
    "message": "Erro! Estoque Insufiente",
    "recordId": 0,
    "data": [
        {
            "sp_return_id": 0,
            "sp_message": "Erro! Estoque Insufiente",
            "sp_error_id": 1
        }
    ],
    "quantity": 1,
    "errorId": 1
}

*/
