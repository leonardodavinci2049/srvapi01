import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PtypeController } from './ptype.controller';
import { PtypeService } from './ptype.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PtypeController],
  providers: [PtypeService],
})
export class PtypeModule {}
