import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountTypeModule } from './account-type/account-type.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuxiliarSystemModule } from './auxiliar-system/auxiliar-system.module';
import { CurrencyTypeModule } from './currency-type/currency-type.module';
import { AccountContableModule } from './account-contable/account-contable.module';
import { ContableEntriesModule } from './contable-entries/contable-entries.module';
import { MongoService } from './mongo.service';


@Module({
  imports: [AccountTypeModule, 
    MongooseModule.forRoot("mongodb://sistemacontabilidaddb:HiuiR2cK7ytO9kOyMWAZTKKaAHOIoKd79bpi0u8aLlzxaozSHe33y2LiNSxRpnP8XFnnpHrpdghKACDbAaG1FQ==@sistemacontabilidaddb.mongo.cosmos.azure.com:10255/api?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@sistemacontabilidaddb@", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
       AuxiliarSystemModule, CurrencyTypeModule, AccountContableModule, ContableEntriesModule],
  controllers: [AppController],
  providers: [AppService,MongoService], 
})
export class AppModule {}
