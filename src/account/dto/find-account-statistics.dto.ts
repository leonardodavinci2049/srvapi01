import { IsInt } from 'class-validator';

export class FindAccountStatisticsDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  INTERVAL_DIAS: number;
}
