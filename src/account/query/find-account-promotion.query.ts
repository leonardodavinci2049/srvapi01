import { FindAccountPromotionDto } from '../dto/find-account-promotion.dto';

export function FindAccountPromotionQuery(
  dataJsonDto: FindAccountPromotionDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;

  const queryString = ` call sp_account_products_promotion_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario}
      ) `;

  return queryString;
}
