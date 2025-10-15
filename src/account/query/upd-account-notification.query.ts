import { UpdAccountNotificationDto } from '../dto/upd-account-notification.dto';

export function UpdAccountNotificationQuery(
  dataJsonDto: UpdAccountNotificationDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olEmailNotifications = dataJsonDto.EMAIL_NOTIFICATIONS;
  const olSmsNotifications = dataJsonDto.SMS_NOTIFICATIONS;
  const olWhatsappNotifications = dataJsonDto.WHATSAPP_NOTIFICATIONS;
  const olPushNotifications = dataJsonDto.PUSH_NOTIFICATIONS;

  const queryString = ` call sp_account_notification_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      ${olEmailNotifications},
      ${olSmsNotifications},
      ${olWhatsappNotifications},
      ${olPushNotifications}
      ) `;

  return queryString;
}
