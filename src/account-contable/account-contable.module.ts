import { Module } from '@nestjs/common';
import { AccountContableService } from './account-contable.service';
import { AccountContableController } from './account-contable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountContableSchema } from '../schemas/account-contable.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'AccountContable', schema: AccountContableSchema}
    ])
  ],
  providers: [AccountContableService],
  controllers: [AccountContableController]
})
export class AccountContableModule {}
