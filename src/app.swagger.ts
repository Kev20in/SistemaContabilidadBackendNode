import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger' ;
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
const swaggerConfig = new DocumentBuilder()
.setTitle( 'Sistema de Contabilidad Backend' )
.setDescription(
'Esta es una API Creada con Nest JS con el fin educativo de aprender hacer CRUDs docs by Kevin Agramonte.',
)
.setVersion('1.0')
.build();
const document = SwaggerModule.createDocument(app, swaggerConfig);
SwaggerModule.setup( '/swagger', app, document, );
};