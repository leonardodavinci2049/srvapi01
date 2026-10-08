import { Module } from '@nestjs/common';
import { CostumerPdvService } from './costumer-pdv.service';
import { CostumerPdvController } from './costumer-pdv.controller';

@Module({
  controllers: [CostumerPdvController],
  providers: [CostumerPdvService],
})
export class CostumerPdvModule {}
