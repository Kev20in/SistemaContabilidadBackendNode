import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: corsOptions });
  var whitelist = ['http://localhost:4200/'] 
  var corsOptions = {
    origin: function (origin, callback){
      if(whitelist.indexOf(origin)=== -1){
        callback(null, true);
      }else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }
  app.setGlobalPrefix('api');
  app.enableCors();
  initSwagger(app)
  await app.listen(3000);
}
bootstrap();
