import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCartItemAddDto {
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
  ID_CARRINHO: number;

  @IsInt()
  ID_PRODUTO: number;
  @IsInt()
  QT: number;

  @IsInt()
  TYPE_BUSINESS: number;

  @IsOptional()
  @IsString()
  IP?: string;

  @IsOptional()
  @IsString()
  CEP?: string;
}
