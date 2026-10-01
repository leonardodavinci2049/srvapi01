import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class ProductFindTaxonomyOutsideAllV2Dto extends EndpointContextDto {
  @ApiPropertyOptional({
    description: 'Search by product, reference, model or numeric ID',
    maxLength: 300,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  pe_search?: string | null;

  @ApiPropertyOptional({
    description:
      '1 requires absence of a direct family link; otherwise ignored',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @IsInt()
  pe_flag_no_family?: number | null;

  @ApiPropertyOptional({
    description: '1 requires absence of a direct group link; otherwise ignored',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @IsInt()
  pe_flag_no_group?: number | null;

  @ApiPropertyOptional({
    description:
      '1 requires absence of a direct subgroup link; otherwise ignored',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @IsInt()
  pe_flag_no_subgroup?: number | null;

  @ApiPropertyOptional({
    description: 'Page size; null or values below 1 use 100; capped at 1000',
    nullable: true,
    example: 100,
  })
  @IsOptional()
  @IsInt()
  pe_records_quantity?: number | null;

  @ApiPropertyOptional({
    description: 'Zero-based page index; null or negative values use 0',
    nullable: true,
    example: 0,
  })
  @IsOptional()
  @IsInt()
  pe_page_id?: number | null;

  @ApiPropertyOptional({
    description: 'Sort column: 1 product name, otherwise product ID',
    nullable: true,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  pe_column_id?: number | null;

  @ApiPropertyOptional({
    description: 'Sort direction: 2 descending, otherwise ascending',
    nullable: true,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  pe_order_id?: number | null;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG_ID",
  "pe_user_id": "USER_ID",
  "pe_user_name": "Test User",
  "pe_user_role": "user",
  "pe_person_id": 1,
  "pe_search": null,
  "pe_flag_no_family": 0,
  "pe_flag_no_group": 0,
  "pe_flag_no_subgroup": 0,
  "pe_records_quantity": 2,
  "pe_page_id": 0,
  "pe_column_id": 1,
  "pe_order_id": 1
}
*/
