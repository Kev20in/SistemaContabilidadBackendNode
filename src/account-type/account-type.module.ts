import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountTypeSchema } from 'src/schemas/account-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'AccountType', schema: AccountTypeSchema}
    ])
  ],
  providers: [AccountTypeService ],
  controllers: [AccountTypeController]
})
export class AccountTypeModule {}
