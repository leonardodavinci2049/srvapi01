import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class ProductWebFindIdV3Dto {
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
  pe_person_id!: number;

  @ApiProperty({ description: 'Type Business', example: 1 })
  @IsInt()
  pe_type_business!: number;

  @ApiProperty({ description: 'Product ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  pe_product_id?: number;

  @ApiProperty({
    description: 'Product Slug',
    maxLength: 300,
    example: 'produto-exemplo',
    required: false,
  })
  @IsOptional()
  @IsString()
  pe_product_slug?: string;
}

/*
Sample JSON for testing:
{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_type_business": 1,
  "pe_product_id": 55251,
  "pe_product_slug": ""
}
*/

/* 

 Sample response from the ProductWebFindIdV3Query:

{
    "statusCode": 100200,
    "message": "Cadastro Carregados com sucesso",
    "recordId": 55251,
    "data": {
        "Product Details": [
            {
                "ID_PRODUTO": 55251,
                "SKU": 55251,
                "PRODUTO": "PERFUME ADYAN AREEJ AL ARAB BLACK MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME AREEJ AL ARAB BLACK",
                "ETIQUETA": "ADYAN AREEJ AL ARAB",
                "REF": "M.EDP 100ML ARABE",
                "MODELO": "ADYAN AREEJ AL ARAB",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/194851c3-4211-4fb2-9e9f-09d1cced34d8/perfume-adyan-areej-al-arab-black-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-adyan-areej-al-arab-black-masculino-edp-100ml-arabe",
                "PATH_IMAGEM_MARCA": "",
                "ID_TIPO": 9,
                "TIPO": "PERFUMARIA",
                "ID_MARCA": 1,
                "MARCA": "NONE",
                "VL_ATACADO": "140.000000",
                "VL_CORPORATIVO": "155.000000",
                "VL_VAREJO": "170.000000",
                "OURO": "140.000000",
                "PRATA": "155.000000",
                "BRONZE": "170.000000",
                "ESTOQUE_LOJA": 2,
                "TEMPODEGARANTIA_DIA": 0,
                "PESO_GR": 0,
                "COMPRIMENTO_MM": 0,
                "LARGURA_MM": 0,
                "ALTURA_MM": 0,
                "DIAMETRO_MM": 0,
                "DESTAQUE": 0,
                "PROMOCAO": 0,
                "FLAG_SERVICO": 0,
                "IMPORTADO": 1,
                "DESCRICAO_VENDA": null,
                "ANOTACOES": "Areej Al Arab da Adyan Perfumes é verdadeiramente uma obra-prima olfativa que desafia as convenções e celebra a autenticidade de cada indivíduo. Desde o primeiro spray, você é recebido por uma combinação vibrante de frutas cítricas que trazem uma energia refrescante, juntamente com o chá verde, que adiciona uma nota crocante e revigorante. Esta abertura animada é apenas o início de uma experiência olfativa envolvente que promete levar você a uma jornada sensorial inesquecível.\r\n\r\nÀ medida que a fragrância evolui, surge um belo buquê de florais aromáticos, apresentando o fascínio atemporal da rosa, a delicada doçura do jasmim e as nuances terrosas do patchouli. Estas notas requintadas misturam-se harmoniosamente para criar um aroma cativante e equilibrado.\r\n\r\nNa base, acordes quentes e sensuais de âmbar e almíscar adicionam profundidade e sofisticação, criando uma impressão duradoura e memorável. A fragrância permanece na pele, deixando um rastro de elegância e fascínio que chama a atenção.\r\n\r\nElaborado com cuidado meticuloso e atenção aos detalhes, o Areej Al Arab incorpora o espírito de individualidade e autoexpressão. É uma fragrância que celebra a beleza e o estilo únicos de cada pessoa, permitindo que ela realmente abrace seu eu autêntico.",
                "META_TITLE": null,
                "META_DESCRIPTION": null
            }
        ],
        "Category Related": [
            {
                "ID_TAXONOMY": 2629,
                "PARENT_ID": 0,
                "TAXONOMIA": "PERFUMARIA",
                "SLUG": "perfumaria-e-beleza",
                "ORDEM": 0,
                "LEVEL": 1
            },
            {
                "ID_TAXONOMY": 3306,
                "PARENT_ID": 2629,
                "TAXONOMIA": "Perfume Masculino",
                "SLUG": "perfume-masculino-1",
                "ORDEM": 0,
                "LEVEL": 2
            },
            {
                "ID_TAXONOMY": 3312,
                "PARENT_ID": 3306,
                "TAXONOMIA": "Árabe",
                "SLUG": "arabe-1",
                "ORDEM": 0,
                "LEVEL": 3
            },
            {
                "ID_TAXONOMY": 3543,
                "PARENT_ID": 2629,
                "TAXONOMIA": "Perfumes Arabes",
                "SLUG": "perfumes-arabes",
                "ORDEM": 0,
                "LEVEL": 2
            },
            {
                "ID_TAXONOMY": 3544,
                "PARENT_ID": 3543,
                "TAXONOMIA": "Árabe Masculino",
                "SLUG": "rabe-masculino",
                "ORDEM": 0,
                "LEVEL": 3
            }
        ],
        "Related Products": [
            {
                "ID_TAXONOMY": 3312,
                "SKU": 55251,
                "PRODUTO": "PERFUME ADYAN AREEJ AL ARAB BLACK MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME AREEJ AL ARAB BLACK",
                "ETIQUETA": "ADYAN AREEJ AL ARAB",
                "REF": "M.EDP 100ML ARABE",
                "MODELO": "ADYAN AREEJ AL ARAB",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/194851c3-4211-4fb2-9e9f-09d1cced34d8/perfume-adyan-areej-al-arab-black-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-adyan-areej-al-arab-black-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 2,
                "VL_ATACADO": "140.000000",
                "VL_CORPORATIVO": "155.000000",
                "VL_VAREJO": "170.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 55020,
                "PRODUTO": "PERFUME AFNAN 9PM BLACK MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME AFNAN 9PM",
                "ETIQUETA": "PERF.AFNAN 9PM",
                "REF": "M.EDP 100ML",
                "MODELO": "PERF.AFNAN 9PM",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/fdbe9ebc-b268-45c3-8ad3-fdd385888d63/perfume-afnan-9pm-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-afnan-9pm-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 3,
                "VL_ATACADO": "180.000000",
                "VL_CORPORATIVO": "203.000000",
                "VL_VAREJO": "218.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 55219,
                "PRODUTO": "PERFUME AFNAN 9PM REBEL MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME AFNAN 9PM REBEL",
                "ETIQUETA": "AFNAN 9PM REBEL",
                "REF": "MASC.EDP 100ML ARABE",
                "MODELO": "AFNAN 9PM REBEL",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/d96c4784-7bb8-4eae-9364-2eb048de702e/perfume-afnan-9pm-rebel-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-afnan-9pm-rebel-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 2,
                "VL_ATACADO": "241.000000",
                "VL_CORPORATIVO": "272.000000",
                "VL_VAREJO": "300.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 53847,
                "PRODUTO": "PERFUME AL HARAMAIN LAVENTURE MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME LAVENTURE HARAMAIN",
                "ETIQUETA": "AL HARAMAIN",
                "REF": "L'AVENTUR MASCULINO 100",
                "MODELO": "AL HARAMAIN",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/16/e6ec9fae-ba0c-4ad1-8309-eac963532c04/perfume-al-haramain-laventure-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-al-haramain-laventure-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 6,
                "VL_ATACADO": "230.000000",
                "VL_CORPORATIVO": "263.000000",
                "VL_VAREJO": "278.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 54836,
                "PRODUTO": "PERFUME AL HARAMAIN SIGNATURE BLUE MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME SIGNATURE BLUE",
                "ETIQUETA": "P.AL HARAMAIN SIGN",
                "REF": "BLUE M.EDP 100ML",
                "MODELO": "P.AL HARAMAIN SIGN",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/f8c8c0e8-10b6-4991-90c6-275b1aeb5bf7/perfume-al-haramain-signature-blue-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-al-haramain-signature-blue-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 1,
                "VL_ATACADO": "238.000000",
                "VL_CORPORATIVO": "258.000000",
                "VL_VAREJO": "278.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 54496,
                "PRODUTO": "PERFUME AL WATANIAH ATTAR AL WESAL MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME ATTAR AL WESAL",
                "ETIQUETA": "AL WATANIAH ATTAR",
                "REF": "AL WESAL MASCULINO100M",
                "MODELO": "AL WATANIAH ATTAR",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/cb10a96c-55d0-4ccc-a66f-27696e17deea/perfume-al-wataniah-attar-al-wesal-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-al-wataniah-attar-al-wesal-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 12,
                "VL_ATACADO": "165.000000",
                "VL_CORPORATIVO": "185.000000",
                "VL_VAREJO": "210.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 54331,
                "PRODUTO": "PERFUME AL WATANIAH OUD MYSTERY INTENSE MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME OUD MYSTERY INTENSE",
                "ETIQUETA": "AL WATANIAH OUD",
                "REF": "MYSTERY INTENSE MASCULI",
                "MODELO": "AL WATANIAH OUD",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/16/61a12813-74ed-4baf-b38e-afe3f6d3ebc8/perfume-al-wataniah-oud-mystery-intense-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-al-wataniah-oud-mystery-intense-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 4,
                "VL_ATACADO": "150.000000",
                "VL_CORPORATIVO": "170.000000",
                "VL_VAREJO": "190.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            },
            {
                "ID_TAXONOMY": 3312,
                "SKU": 54597,
                "PRODUTO": "PERFUME AL WATANIAH SPECIAL OUD MASCULINO EDP 100ML ARABE",
                "DESCRICAO_TAB": "PERFUME AL WATANIAH SPECIAL OUD",
                "ETIQUETA": "P.AL WATANIAH SPECIAL",
                "REF": "OUD UNISSEX EDP 100M",
                "MODELO": "P.AL WATANIAH SPECIAL",
                "PATH_IMAGEM": "https://assents01.comsuporte.com.br/uploads/images/2025/12/17/246bb589-dc19-4185-8b85-0eb0f3172721/perfume-al-wataniah-special-oud-masculino-edp-100ml-arabe-main-original.jpg",
                "SLUG": "perfume-al-wataniah-special-oud-masculino-edp-100ml-arabe",
                "ESTOQUE_LOJA": 12,
                "VL_ATACADO": "105.000000",
                "VL_CORPORATIVO": "117.000000",
                "VL_VAREJO": "140.000000",
                "IMPORTADO": 1,
                "PROMOCAO": 0,
                "LANCAMENTO": 0
            }
        ]
    },
    "quantity": 14,
    "errorId": 0,
    "info1": ""
}


*/