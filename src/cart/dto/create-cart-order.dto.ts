import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCartOrderDto {
  @IsOptional()
  @IsUUID(4, { message: 'ID_UUID must be a valid UUIDv4' })
  ID_UUID;

  @IsInt()
  ID_SYSTEM?: number;
  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_VENDEDOR: number;

  @IsInt()
  ID_CARRINHO: number;

  @IsInt()
  TYPE_BUSINESS: number;

  @IsInt()
  ID_PG_FORMA: number;

  @IsInt()
  ID_LOCATION: number;

  @IsOptional()
  @IsString()
  IP?: string;

  @IsOptional()
  @IsString()
  CUPOM?: string;

  @IsOptional()
  @IsString()
  OBSERVACOES?: string;
}
