import { Module } from '@nestjs/common';
import { CurrencyTypeService } from './currency-type.service';
import { CurrencyTypeController } from './currency-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyTypeSchema } from 'src/schemas/currency-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CurrencyType', schema: CurrencyTypeSchema}
    ])
  ],
  providers: [CurrencyTypeService],
  controllers: [CurrencyTypeController]
})
export class CurrencyTypeModule {}
