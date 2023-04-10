import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoService } from './mongo.service';

@ApiTags('App Module')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly mongoService: MongoService) {}

  @ApiOperation({ summary: 'Obtener saludo' })
  @ApiResponse({ status: 200, })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('/get')
  async getHello2(): Promise<string> {
    await this.mongoService.connect();
    const client = this.mongoService.getClient();
    const collection = client.db('api').collection('accounttypes');
    const result = await collection.find().toArray();
    return result.toString();
  }

  // @Get(':id')
  // @ApiOperation({ summary: 'Obtener un ejemplo por ID' })
  // @ApiParam({ name: 'id', description: 'ID del ejemplo', type: String })
  // findOne(@Param('id') id: string): string {
  //   return `El ID ingresado es: ${id}`;
  // }
}
