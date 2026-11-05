import { Module } from '@nestjs/common';
import { DbConnectionModule } from 'src/db-connection/db-connection.module';
import { PtypeController } from './ptype.controller';
import { PtypeService } from './ptype.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [PtypeController],
  providers: [PtypeService],
})
export class PtypeModule {}
