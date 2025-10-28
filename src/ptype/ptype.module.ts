import { Module } from '@nestjs/common';
import { PtypeService } from './ptype.service';
import { PtypeController } from './ptype.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PtypeController],
  providers: [PtypeService],
})
export class PtypeModule {}
