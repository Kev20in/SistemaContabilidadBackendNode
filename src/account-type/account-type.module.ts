import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountTypeSchema } from 'src/schemas/account-type.schema';
import { MongoService } from 'src/mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'AccountType', schema: AccountTypeSchema}
    ])
  ],
  providers: [AccountTypeService, MongoService],
  controllers: [AccountTypeController]
})
export class AccountTypeModule {}
