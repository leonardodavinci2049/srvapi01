import { IsInt } from 'class-validator';

export class FindAccountOrdersListDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  ID_PEDIDO: number;

  @IsInt()
  ID_STATUS_PEDIDO: number;

  @IsInt()
  ID_STATUS_FINANC: number;

  @IsInt()
  ID_STATUS_ENTREGA: number;

  @IsInt()
  LIMIT: number;
}
