import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ConfigurationAddressUpdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Address ZIP Code', maxLength: 45 })
  @IsString()
  @IsOptional()
  @MaxLength(45)
  pe_address_zip_code?: string;

  @ApiProperty({ description: 'Address Street', maxLength: 200 })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_address_street?: string;

  @ApiProperty({ description: 'Address Additional', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_address_additional?: string;

  @ApiProperty({ description: 'Address Neighborhood', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_address_neighborhood?: string;

  @ApiProperty({ description: 'Address City', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_address_city?: string;

  @ApiProperty({ description: 'Address State', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_address_state?: string;

  @ApiProperty({ description: 'Address Country', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_address_country?: string;

  @ApiProperty({ description: 'Company Address 1' })
  @IsString()
  @IsOptional()
  pe_company_address1?: string;

  @ApiProperty({ description: 'Company Address 2' })
  @IsString()
  @IsOptional()
  pe_company_address2?: string;

  @ApiProperty({ description: 'Company Address 3' })
  @IsString()
  @IsOptional()
  pe_company_address3?: string;

  @ApiProperty({ description: 'Company Maps' })
  @IsString()
  @IsOptional()
  pe_company_maps?: string;
}
