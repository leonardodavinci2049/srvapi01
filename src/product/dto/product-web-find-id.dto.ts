import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class ProductWebFindIdDto {
  @ApiProperty({ description: 'App ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_app_id: number;

  @ApiProperty({ description: 'System Client ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_system_client_id: number;

  @ApiProperty({ description: 'Store ID', example: 1 })
  @IsNotEmpty()
  @IsInt()
  pe_store_id: number;

  @ApiProperty({
    description: 'Organization ID',
    maxLength: 200,
    example: 'ORG001',
  })
  @IsNotEmpty()
  @IsString()
  pe_organization_id: string;

  @ApiProperty({ description: 'Member ID', maxLength: 200, example: 'MEM001' })
  @IsString()
  pe_member_id: string;

  @ApiProperty({ description: 'User ID', maxLength: 200, example: 'USER001' })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Person ID', example: 1 })
  @IsInt()
  pe_person_id: number;

  @ApiProperty({ description: 'Type Business', example: 1 })
  @IsInt()
  pe_type_business: number;

  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsInt()
  pe_id_produto: number;

  @ApiProperty({
    description: 'Product Slug',
    maxLength: 300,
    example: 'produto-exemplo',
  })
  @IsString()
  pe_slug_produto: string;
}
