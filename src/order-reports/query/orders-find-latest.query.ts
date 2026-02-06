import { OrdersFindLatestDto } from '../dto/orders-find-latest.dto';

export function OrdersFindLatestQuery(
  dataJsonDto: OrdersFindLatestDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olIdPedido = dataJsonDto.pe_id_pedido;
  const olIdCliente = dataJsonDto.pe_id_cliente;
  const olIdVendedor = dataJsonDto.pe_id_vendedor;
  const olIdFisico = dataJsonDto.pe_id_fisico;
  const olIdStatusPedido = dataJsonDto.pe_id_status_pedido;
  const olIdStatusFinanc = dataJsonDto.pe_id_status_financ;
  const olIdLocalizacao = dataJsonDto.pe_id_localizacao;
  const olDataInicial = dataJsonDto.pe_data_inicial
    ? new Date(dataJsonDto.pe_data_inicial).toISOString().split('T')[0]
    : null;
  const olDataFinal = dataJsonDto.pe_data_final
    ? new Date(dataJsonDto.pe_data_final).toISOString().split('T')[0]
    : null;

  const olLimit = dataJsonDto.pe_limit ?? 100;

  const queryString = ` call sp_orders_find_latest_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olIdPedido},
        ${olIdCliente},
        ${olIdVendedor},
        ${olIdFisico},
        ${olIdStatusPedido},
        ${olIdStatusFinanc},
        ${olIdLocalizacao},
        ${olDataInicial ? `'${olDataInicial}'` : 'NULL'},
        ${olDataFinal ? `'${olDataFinal}'` : 'NULL'},
        ${olLimit}
      ) `;

  return queryString;
}
