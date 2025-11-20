import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class BrandUpdateDto {
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

  @ApiProperty({ description: 'Member ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_member_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  pe_id_marca: number;

  @ApiProperty({ description: 'Brand name', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  pe_marca: string;

  @ApiProperty({ description: 'Brand slug', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  pe_slug: string;

  @ApiProperty({ description: 'Image path', maxLength: 500 })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  pe_path_imagem?: string;

  @ApiProperty({ description: 'Notes/annotations' })
  @IsString()
  @IsOptional()
  pe_anotacoes?: string;
}
