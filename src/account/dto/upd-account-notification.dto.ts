import { IsInt } from 'class-validator';

export class UpdAccountNotificationDto {
  @IsInt()
  ID_SYSTEM?: number;

  @IsInt()
  ID_LOJA: number;

  @IsInt()
  ID_USUARIO: number;

  @IsInt()
  EMAIL_NOTIFICATIONS: number;

  @IsInt()
  SMS_NOTIFICATIONS: number;
  @IsInt()
  WHATSAPP_NOTIFICATIONS: number;

  @IsInt()
  PUSH_NOTIFICATIONS: number;
}
