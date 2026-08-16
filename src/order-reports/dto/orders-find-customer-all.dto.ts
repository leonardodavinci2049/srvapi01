import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class OrdersFindCustomerAllDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_id!: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_customer_id!: number;

  @ApiProperty({ description: 'Salesperson ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_seller_id!: number;

  @ApiProperty({ description: 'Order Status ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_order_status_id!: number;

  @ApiProperty({ description: 'Financial Status ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_financial_status_id!: number;

  @ApiProperty({ description: 'Location ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_location_id!: number;

  @ApiProperty({ description: 'Initial Date' })
  @Type(() => Date)
  @IsOptional()
  pe_initial_date!: Date;

  @ApiProperty({ description: 'Final Date' })
  @Type(() => Date)
  @IsOptional()
  pe_final_date!: Date;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  pe_limit!: number;
}

/*Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "org123",
  "pe_user_id": "user123",
  "pe_person_id": 123,
  "pe_user_name": "John Doe", 
  "pe_user_role": "admin",
  "pe_order_id": 0,
  "pe_customer_id": 0,
  "pe_seller_id": 0,

  "pe_order_status_id": 14,
  "pe_financial_status_id": 0,
  "pe_location_id": 0,

  "pe_initial_date": "2024-02-01",
  "pe_final_date": "2024-12-31",
  "pe_limit": 50
}
*/
