import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountTypeModule } from './account-type/account-type.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuxiliarSystemModule } from './auxiliar-system/auxiliar-system.module';
import { CurrencyTypeModule } from './currency-type/currency-type.module';
import { AccountContableModule } from './account-contable/account-contable.module';
import { ContableEntriesModule } from './contable-entries/contable-entries.module';


const Local_URI = 'mongodb://systembackenddb:JAftVZsjQOCRWXMAa1ByrBf4YO1iQtO3RUwkgffmNsIGAGDFMHgGvdoF2UJNatD7KwaQe9OPTenhACDbsQbXlg==@systembackenddb.mongo.cosmos.azure.com:10255/api?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@systembackenddb@'
@Module({
  imports: [AccountTypeModule, 
    MongooseModule.forRoot(process.env.MONGODB_URI || Local_URI
    /*'mongodb://localhost:27017/'*/),
       AuxiliarSystemModule, CurrencyTypeModule, AccountContableModule, ContableEntriesModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
