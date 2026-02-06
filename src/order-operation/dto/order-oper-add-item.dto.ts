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
  pe_id_pedido: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  pe_customer_id: number;

  @ApiProperty({ description: 'Seller ID' })
  @IsNumber()
  pe_id_vendedor: number;

  @ApiProperty({ description: 'Payment Form ID' })
  @IsNumber()
  pe_id_pg_forma: number;

  @ApiProperty({ description: 'Product ID' })
  @IsNumber()
  pe_id_produto: number;

  @ApiProperty({ description: 'Product Quantity' })
  @IsNumber()
  pe_qt_produto: number;

  @ApiProperty({ description: 'Business Type' })
  @IsNumber()
  pe_type_business: number;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_anotacoes: string;
}
