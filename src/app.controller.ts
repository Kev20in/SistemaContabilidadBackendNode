import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('App Module')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Obtener saludo' })
  @ApiResponse({ status: 200, })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':id')
  // @ApiOperation({ summary: 'Obtener un ejemplo por ID' })
  // @ApiParam({ name: 'id', description: 'ID del ejemplo', type: String })
  // findOne(@Param('id') id: string): string {
  //   return `El ID ingresado es: ${id}`;
  // }
}
