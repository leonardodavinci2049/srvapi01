import { IsInt } from 'class-validator';

export class DeleteCartItemDto {
  @IsInt()
  ID_SYSTEM: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_CARRINHO: number;

  @IsInt()
  ID_PRODUTO: number;
}
