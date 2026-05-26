import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OrderFindBudgetCustomerIdV2Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id!: number;

  @ApiProperty({ description: 'System Client ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_system_client_id!: number;

  @ApiProperty({ description: 'Store ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_store_id!: number;

  @ApiProperty({ description: 'Organization ID', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_organization_id!: string;

  @ApiProperty({ description: 'User ID', maxLength: 200 })
  @IsNotEmpty()
  @IsString()
  pe_user_id!: string;

  @ApiProperty({ description: 'User Name', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_name!: string;

  @ApiProperty({ description: 'User Role', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  pe_user_role!: string;

  @ApiProperty({ description: 'Person ID' })
  @IsNumber()
  @IsOptional()
  pe_person_id!: number;

  @ApiProperty({ description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_customer_id!: number;

}

/*Sample JSON for testing in body endpoint:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "John Doe",
  "pe_user_role": "admin",
  "pe_person_id": 29014,
  "pe_customer_id": 33407
}
*/


/*Sample JSON response for testing in body endpoint:


{
    "statusCode": 100200,
    "message": "Information processed successfully",
    "recordId": 500164,
    "data": {
        "Order Summary": [
            {
                "ID_PEDIDO": 500164,
                "QT_ITENS": 1,
                "VL_SUBTOTAL": "2000.000000",
                "VL_FRETE": "0.000000",
                "VL_ACRESCIMO": "0.000000",
                "VL_SEGURO": "0.000000",
                "VL_DESCONTO": "0.000000",
                "VL_TOTAL_PEDIDO": "2000.000000"
            }
        ],
        "Order Details": [
            {
                "ID_PEDIDO": 500164,
                "ID_LOJA": 1,
                "ID_CLIENTE": 33407,
                "ID_VENDEDOR": 5,
                "ID_PROTOCOLO": 0,
                "ID_LOCALIZACAO_PED": 1,
                "ID_EQUIPAMENTO": null,
                "ID_PG_FORMA": 1,
                "ID_CARRINHO": 0,
                "ID_TRANSPORTADORA": 1,
                "FLAG_VENDA_ATACADO": 2,
                "VL_DESCONTO": "0.00",
                "VL_FRETE": "0.0000",
                "ID_STATUS_ESTOQUE": 0,
                "ID_STATUS_PEDIDO": 22,
                "ID_STATUS_FINANCEIRO": 0,
                "ID_STATUS_ENTREGA": 0,
                "STATUS_PEDIDO": "ORCAMENTO",
                "STATUS_FINANCEIRO": "INEXISTENTE",
                "STATUS_ENTREGA": "INEXISTENTE",
                "STATUS_ESTOQUE": "INEXISTENTE",
                "DATA_PEDIDO": null,
                "DATA_VENDA": null,
                "DATA_RETIRADA": null,
                "DATA_ESTOQUE": null,
                "DATA_PAGAMENTO": null,
                "DATA_ENTREGA": null,
                "DATADOCADASTRO": "2026-05-23T16:03:13.000Z",
                "ANOTACOES": ""
            }
        ],
        "Order Items": [
            {
                "ID_MOVIMENTO": 761749,
                "ID_PEDIDO": 500164,
                "ID_PRODUTO": 54990,
                "EAN": "",
                "REF": "VERBATIM 17,3",
                "SKU": null,
                "ETIQUETA": "MONITOR PORTATIL",
                "ID_TIPO": 1,
                "MODELO": "MONITOR PORTATIL",
                "PRODUTO": "MONITOR PORTATIL VERBATIM 17,3 FHD COM TOUCH HDMI+USB",
                "QT": 1,
                "VL_UNITARIO": "2000.000000",
                "VL_DESCONTO": "0.000000",
                "VL_DESCONTO_ADM": "0.000000",
                "VL_ACRESCIMO": "0.000000",
                "VL_SEGURO": "0.000000",
                "CODIGOP": null,
                "PROMOCAO": 0,
                "ESTOQUE_LOJA1": 2,
                "DEPOSITO1": 0,
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/8e6e34a9-321d-4239-8748-1c427e5115e1/monitor-portatil-verbatim-173-fhd-com-touch-hdmiusb-main-original.jpg",
                "PATH_PAGE": "https://mundialmegastore.com.br/product/monitor-portatil-verbatim-17-3-fhd-com-touch-hdmi-usb-54990",
                "TEMPODEGARANTIA_DIA": 0,
                "QT_ESTORNADA": 0,
                "VL_SUBTOTAL": "2000.000000",
                "VL_DESCONTO_TOTAL": "0.000000",
                "VL_TOTAL": "2000.000000",
                "DATADOCADASTRO": "2026-05-23T16:03:25.000Z",
                "ANOTACOES": ""
            }
        ],
        "Customer Details": [
            {
                "ID_CLIENTE": 33407,
                "NOME_CLIENTE": "TARIFA MINIMA SERVICOS DE INTERNET LTDA - ME",
                "PATH_IMAGEM": "",
                "DATADOCADASTRO": "2019-01-24T16:40:56.000Z",
                "DT_ULTIMA_COMPRA": "2025-08-30T12:45:47.000Z",
                "FONE1": "16997322422",
                "WHATAPP1": "",
                "EMAIL": "tiago.registro@gmail.com",
                "ID_PESSOA_TIPO": 2,
                "ACCOUNT_TIPO": "PESSOA JURÍDICA",
                "ID_TIPO_CLIENTE": 2,
                "ACCOUNT_STATUS": "CLIENTE CORPORATIVO",
                "CPF": "",
                "RG": "",
                "RAZAO_SOCIAL": "TARIFA MINIMA SERVICOS DE INTERNET LTDA - ME",
                "NOME_FANTASIA": "TARIFA MINIMA SERVICOS DE INTERNET LTDA - ME",
                "CNPJ": "08618659000118",
                "INSC_ESTADUAL": "",
                "INSC_MUNICIPAL": "",
                "CEP": "14055040",
                "ENDERECO": "Rua Piauí",
                "ENDERECO_NUMERO": "1209",
                "COMPLEMENTO": "",
                "BAIRRO": "Ipiranga",
                "CIDADE": "Ribeirão Preto",
                "UF": "SP",
                "PAIS": "Brasil",
                "COD_MUNICIPIO": 3543402,
                "COD_UF": 35,
                "ANOTACOES": ""
            }
        ],
        "Seller Details": [
            {
                "ID_VENDEDOR": 5,
                "NOME_VENDEDOR": "Eliana",
                "IMAGEM_VENDEDOR": "",
                "TELEFONE_VENDEDOR": "16996303390",
                "WHATSAPP_VENDEDOR": "",
                "EMAIL_VENDEDOR": "eliana@mundialrevenda.com.br"
            }
        ]
    },
    "quantity": 5,
    "errorId": 0,
    "info1": ""
}



*/