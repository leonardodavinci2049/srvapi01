import { IsInt, IsOptional } from 'class-validator';

export class CartQuantityItemsDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;
  @IsOptional()
  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_CARRINHO?: number;
}
