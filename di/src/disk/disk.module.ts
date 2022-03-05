import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from './disk.service';

@Module({
  imports : [PowerModule],
  exports : [DiskService],
  providers: [DiskService]
})
export class DiskModule {}
