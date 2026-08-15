import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class OrderUpdNotesIdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Order ID' })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  pe_order_id!: number;

  @ApiProperty({ description: 'Notes', maxLength: 500, required: false })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_notes?: string;
}

/*Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "org123",
  "pe_user_id": "user123",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 123,
  "pe_order_id": 480669,
  "pe_notes": "This is a note for the order."
}
*/
