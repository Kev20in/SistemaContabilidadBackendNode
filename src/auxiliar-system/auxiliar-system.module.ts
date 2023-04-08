import { Module } from '@nestjs/common';
import { AuxiliarSystemService } from './auxiliar-system.service';
import { AuxiliarSystemController } from './auxiliar-system.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuxiliarSystemSchema } from 'src/schemas/auxiliar-system.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'AuxiliarSystem', schema: AuxiliarSystemSchema}
    ])
  ],
  providers: [AuxiliarSystemService],
  controllers: [AuxiliarSystemController]
})
export class AuxiliarSystemModule {}
