import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OrderOperAddItemDto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Member Role', maxLength: 200 })
  @IsString()
  pe_member_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  pe_order_id: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  pe_customer_id: number;

  @ApiProperty({ description: 'Seller ID' })
  @IsNumber()
  pe_seller_id: number;

  @ApiProperty({ description: 'Payment Form ID' })
  @IsNumber()
  pe_payment_form_id: number;

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_product_id: number;

  @ApiProperty({ description: 'Product Quantity' })
  @IsNumber()
  pe_product_quantity: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  pe_business_type: number;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_notes: string;
}

/*
Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 3,
  "pe_organization_id": "ORG001",
  "pe_member_role": "saller",
  "pe_user_id": "USER001",
  "pe_person_id": 29014,
  "pe_order_id": 480669,
  "pe_customer_id": 29014,
  "pe_seller_id": 29014,
  "pe_payment_form_id": 1,
  "pe_product_id": 54364,
  "pe_product_quantity": 2,
  "pe_business_type": 1,
  "pe_notes": "PDV ONLINE - please handle with care."


}
*/
