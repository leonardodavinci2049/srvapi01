import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class AppConfigFindWebhookIdV2Dto {
  @ApiProperty({ description: 'System Client ID', example: 1 })
  @IsInt()
  @Min(1)
  @Max(2147483647)
  pe_system_client_id!: number;
}

/* Sample JSON for testing in body endpoint:
{
  "pe_system_client_id": 1
}
*/
