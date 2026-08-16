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

export class ConfigurationOpeningUpdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Company Opening Hours', maxLength: 200 })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  pe_company_opening?: string;
}
