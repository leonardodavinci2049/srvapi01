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

export class ConfigurationFindDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Company Name', maxLength: 100 })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  pe_company_name?: string;

  @ApiProperty({ description: 'Limit' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_limit?: number;
}
