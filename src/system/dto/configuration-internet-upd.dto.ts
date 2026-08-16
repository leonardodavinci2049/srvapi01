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

export class ConfigurationInternetUpdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Company Internet 1', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet1?: string;

  @ApiProperty({ description: 'Company Internet 2', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet2?: string;

  @ApiProperty({ description: 'Company Internet 3', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet3?: string;

  @ApiProperty({ description: 'Company Internet 4', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet4?: string;

  @ApiProperty({ description: 'Company Internet 5', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_company_internet5?: string;
}
