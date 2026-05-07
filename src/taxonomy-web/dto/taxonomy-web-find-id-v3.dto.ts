import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class TaxonomyWebFindIdV3Dto {
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

  @ApiProperty({ description: 'Taxonomy ID' })
  @IsNotEmpty()
  @IsNumber()
  pe_taxonomy_id!: number;
}

/*
Sample JSON for testing in body endpoint:

{
  "pe_app_id": 1,
  "pe_system_client_id": 1,
  "pe_store_id": 1,
  "pe_organization_id": "ORG001",
  "pe_user_id": "USER001",
  "pe_user_name": "User Name",
  "pe_user_role": "saller",
  "pe_person_id": 29014,
  "pe_taxonomy_id": 2629

}

*/


/*  Sample response from the ProductWebFindV3Query:

{
    "statusCode": 100200,
    "message": "Dados carregados com sucesso.",
    "recordId": 1,
    "data": {
        "Taxonomy find Id": [
            {
                "ID_TAXONOMY": 2629,
                "PARENT_ID": 0,
                "TAXONOMIA": "PERFUMARIA",
                "PARENT_CATEGORY": null,
                "PATH_IMAGEM": null,
                "SLUG": "perfumaria-e-beleza",
                "LEVEL": 1,
                "ORDEM": 0,
                "ID_IMAGEM": null,
                "QT_RECORDS": 885,
                "INATIVO": 0,
                "META_TITLE": "Perfumaria com cobertura em Ribeirão Preto",
                "META_DESCRIPTION": "Veja soluções para organizar Perfumaria com uma visão mais completa das opções disponíveis, com recursos para comparar benefícios e usos e descubra quais caminhos fazem mais sentido para você, em Ribeirão Preto SP e região",
                "ANOTACOES": null,
                "CREATEDAT": "2025-12-05T11:24:01.000Z",
                "UPDATEDAT": "2026-04-24T17:07:58.000Z"
            }
        ],
        "Taxonomy related": [
            {
                "ID_TAXONOMY": 825,
                "TAXONOMIA": "A CLASSIFICAR",
                "PATH_IMAGEM": null,
                "SLUG": "a-classificar",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 3546,
                "TAXONOMIA": "AUDIO E VIDEO",
                "PATH_IMAGEM": null,
                "SLUG": "audio-e-video",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 3536,
                "TAXONOMIA": "CELULAR",
                "PATH_IMAGEM": null,
                "SLUG": "celular-1764953141",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 3538,
                "TAXONOMIA": "COMPUTADOR",
                "PATH_IMAGEM": null,
                "SLUG": "computador-1764955925",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 187,
                "TAXONOMIA": "ELETRÔNICOS",
                "PATH_IMAGEM": null,
                "SLUG": "informatica-eletronico",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 3330,
                "TAXONOMIA": "INATIVO",
                "PATH_IMAGEM": null,
                "SLUG": "inativo",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 3347,
                "TAXONOMIA": "LINHA CELULAR",
                "PATH_IMAGEM": null,
                "SLUG": "linha-celular",
                "LEVEL": 1,
                "ORDEM": 0
            },
            {
                "ID_TAXONOMY": 3553,
                "TAXONOMIA": "REDE E WIRELESS",
                "PATH_IMAGEM": null,
                "SLUG": "rede-e-wireless",
                "LEVEL": 1,
                "ORDEM": 0
            }
        ]
    },
    "quantity": 9,
    "errorId": 0,
    "info1": ""
}

*/