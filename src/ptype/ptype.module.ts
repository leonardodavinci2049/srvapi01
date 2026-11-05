import { Module } from '@nestjs/common';
import { DbOperationModule } from 'src/db-operation/db-operation.module';
import { PtypeController } from './ptype.controller';
import { PtypeService } from './ptype.service';

@Module({
  imports: [DbOperationModule],
  controllers: [PtypeController],
  providers: [PtypeService],
})
export class PtypeModule {}
