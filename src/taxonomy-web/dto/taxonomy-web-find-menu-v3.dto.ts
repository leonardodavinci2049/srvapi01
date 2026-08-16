import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

import { EndpointContextDto } from 'src/core/dto/endpoint-context.dto';

export class TaxonomyWebFindMenuV3Dto extends EndpointContextDto {
  @ApiProperty({ description: 'Taxonomy Type ID' })
  @IsNumber()
  @IsOptional()
  pe_type_id!: number;

  @ApiProperty({ description: 'Parent Taxonomy ID' })
  @IsNumber()
  @IsOptional()
  pe_parent_id!: number;
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
  "pe_type_id": 12345,
  "pe_parent_id": 0

}

*/

/*

/*  Sample response from the ProductWebFindV3Query:

{
    "statusCode": 100200,
    "message": "Dados carregados com sucesso.",
    "recordId": 1,
    "data": {
        "Taxonomy find Menu": [
            {
                "ID_TAXONOMY": 3366,
                "PARENT_ID": 3364,
                "TAXONOMIA": "ACCESS POINT",
                "PATH_IMAGEM": null,
                "SLUG": "access-point",
                "LEVEL": 3,
                "ORDEM": 0,
                "ID_IMAGEM": null,
                "QT_RECORDS": 4
            },
            {
                "ID_TAXONOMY": 365,
                "PARENT_ID": 217,
                "TAXONOMIA": "Acessórios",
                "PATH_IMAGEM": null,
                "SLUG": "acessorios",
                "LEVEL": 3,
                "ORDEM": 0,
                "ID_IMAGEM": null,
                "QT_RECORDS": 0
            },
            {
                "ID_TAXONOMY": 914,
                "PARENT_ID": 913,
                "TAXONOMIA": "Acessórios",
                "PATH_IMAGEM": null,
                "SLUG": "acessorios-1",
                "LEVEL": 3,
                "ORDEM": 0,
                "ID_IMAGEM": null,
                "QT_RECORDS": 0
            },
 
        ]
    },
    "quantity": 290,
    "errorId": 0,
    "info1": ""
}



*/
