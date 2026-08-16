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

export class ConfigurationSloganUpdDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Configuration ID' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pe_id_configuration?: number;

  @ApiProperty({ description: 'Slogan 1', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan1?: string;

  @ApiProperty({ description: 'Slogan 2', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan2?: string;

  @ApiProperty({ description: 'Slogan 3', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan3?: string;

  @ApiProperty({ description: 'Slogan 4', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan4?: string;

  @ApiProperty({ description: 'Slogan 5', maxLength: 300 })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  pe_slogan5?: string;

  @ApiProperty({ description: 'Call to Action 1' })
  @IsString()
  @IsOptional()
  pe_call_to_action1?: string;

  @ApiProperty({ description: 'Call to Action 2' })
  @IsString()
  @IsOptional()
  pe_call_to_action2?: string;

  @ApiProperty({ description: 'Call to Action 3' })
  @IsString()
  @IsOptional()
  pe_call_to_action3?: string;

  @ApiProperty({ description: 'Call to Action 4' })
  @IsString()
  @IsOptional()
  pe_call_to_action4?: string;

  @ApiProperty({ description: 'Call to Action 5' })
  @IsString()
  @IsOptional()
  pe_call_to_action5?: string;
}
