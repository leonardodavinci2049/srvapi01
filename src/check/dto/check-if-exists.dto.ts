import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class CheckIfExistsDto extends EndpointContextDto {
  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id!: string;

  @ApiProperty({ description: 'Search term', minLength: 3 })
  @IsString({ message: 'TERMO must be a valid string' })
  @IsNotEmpty()
  @MinLength(3, { message: 'TERMO must have at least 3 characters' })
  pe_term!: string;
}
