import { Module } from '@nestjs/common';
import { ContableEntriesService } from './contable-entries.service';
import { ContableEntriesController } from './contable-entries.controller';

@Module({
  providers: [ContableEntriesService],
  controllers: [ContableEntriesController]
})
export class ContableEntriesModule {}
