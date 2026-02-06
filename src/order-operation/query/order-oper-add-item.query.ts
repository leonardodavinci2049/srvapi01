import { OrderOperAddItemDto } from '../dto/order-oper-add-item.dto';

export function OrderOperAddItemQuery(
  dataJsonDto: OrderOperAddItemDto,
): string {
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olIdPedido = dataJsonDto.pe_id_pedido;
  const olCustomerId = dataJsonDto.pe_customer_id;
  const olIdVendedor = dataJsonDto.pe_id_vendedor;
  const olIdPgForma = dataJsonDto.pe_id_pg_forma;
  const olProductId = dataJsonDto.pe_id_produto;
  const olQtProduto = dataJsonDto.pe_qt_produto;
  const olTypeBusiness = dataJsonDto.pe_type_business;
  const olAnotacoes = dataJsonDto.pe_anotacoes;

  const queryString = ` call sp_order_oper_add_item_v2(
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        ${olIdPedido},
        ${olCustomerId},
        ${olIdVendedor},
        ${olIdPgForma},
        ${olProductId},
        ${olQtProduto},
        ${olTypeBusiness},
        '${olAnotacoes}'
      ) `;

  return queryString;
}
