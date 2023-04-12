import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sistema de Contabilidad Backend')
    .setDescription(
      'Esta es una API Creada con Nest JS con el fin educativo de aprender hacer CRUDs docs by Kevin Agramonte.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/swagger', app, document);
  app.setGlobalPrefix('api');
  await app.init();
  await app.listen(3000);
  return app;
}
export const initSwagger = (app: INestApplication) => {};
