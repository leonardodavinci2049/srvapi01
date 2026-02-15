import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class BrandUpdateV2Dto {
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

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsString()
  pe_user_id: string;

  @ApiProperty({ description: 'Member Role', maxLength: 200 })
  @IsString()
  pe_member_role: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  pe_person_id: number;

  @ApiProperty({ description: 'Brand ID' })
  @IsNumber()
  pe_id_marca: number;

  @ApiProperty({ description: 'Brand', maxLength: 100 })
  @IsString()
  pe_marca: string;

  @ApiProperty({ description: 'Slug', maxLength: 100 })
  @IsString()
  pe_slug: string;

  @ApiProperty({ description: 'Image Path', maxLength: 500 })
  @IsString()
  pe_path_imagem: string;

  @ApiProperty({ description: 'Notes' })
  @IsString()
  pe_anotacoes: string;

  @ApiProperty({ description: 'Inactive' })
  @IsNumber()
  pe_inativo: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 3,
  "pe_organization_id": "ORG001",
  "pe_member_role": "saller",
  "pe_user_id": "USER001",
  "pe_person_id": 29014,
  "pe_id_marca": 123,
  "pe_marca": "Brand Name",   
  "pe_slug": "brand-name",
  "pe_path_imagem": "/images/brand-name.png",
  "pe_anotacoes": "Some notes about the brand",
  "pe_inativo": 0

}

*/
