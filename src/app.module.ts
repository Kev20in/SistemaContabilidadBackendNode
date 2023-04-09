import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountTypeModule } from './account-type/account-type.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuxiliarSystemModule } from './auxiliar-system/auxiliar-system.module';
import { CurrencyTypeModule } from './currency-type/currency-type.module';
import { AccountContableModule } from './account-contable/account-contable.module';
import { ContableEntriesModule } from './contable-entries/contable-entries.module';

@Module({
  imports: [AccountTypeModule, 
    MongooseModule.forRoot(process.env.MONGODB_URI
    /*'mongodb://localhost:27017/'*/),
       AuxiliarSystemModule, CurrencyTypeModule, AccountContableModule, ContableEntriesModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
