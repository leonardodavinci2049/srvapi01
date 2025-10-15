import { IsInt, IsOptional } from 'class-validator';

export class CartViewCustomerDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;
  @IsOptional()
  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_CARRINHO?: number;

  @IsOptional()
  @IsInt()
  TYPE_BUSINESS: number;
}
