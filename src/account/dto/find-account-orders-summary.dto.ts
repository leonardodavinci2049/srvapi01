import { IsInt } from 'class-validator';

export class FindAccountOrdersSummaryDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_PEDIDO: number;

  @IsInt()
  TYPE_BUSINESS: number;
}
