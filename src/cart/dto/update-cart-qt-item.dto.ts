import { IsInt } from 'class-validator';

//import { Role } from 'src/core/enums/role.enum';

export class UpdateCartQtItemDto {
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

  @IsInt()
  QT_ITEM: number;
}
