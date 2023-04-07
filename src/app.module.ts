import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountTypeModule } from './account-type/account-type.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AccountTypeModule, 
    MongooseModule.forRoot('mongodb+srv://kevinagramonte:Kac*020305@cluster0.8lzn4tn.mongodb.net/api?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
