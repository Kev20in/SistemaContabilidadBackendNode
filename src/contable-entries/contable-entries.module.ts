import { Module } from '@nestjs/common';
import { ContableEntriesService } from './contable-entries.service';
import { ContableEntriesController } from './contable-entries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContableEntriesSchema } from 'src/schemas/contable-entries.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'ContableEntries', schema: ContableEntriesSchema}
    ])
  ],
  providers: [ContableEntriesService],
  controllers: [ContableEntriesController]
})
export class ContableEntriesModule {}
