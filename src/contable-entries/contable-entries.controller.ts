import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateContableEntriesDTO } from 'src/dto/contable-entries.dto';
import { ContableEntriesService } from './contable-entries.service';

@ApiTags('Contable-entries')
@Controller('contable-entries')
export class ContableEntriesController {

    constructor(
        private readonly contableEntriesService: ContableEntriesService,
    ){}

    @Post('/add')
    @ApiOperation({ summary: 'Añadir un ContableEntries' })
    async addContableEntries(@Res() res, @Body() createContableEntriesDTO:CreateContableEntriesDTO){
        const contableEntries = await this.contableEntriesService.addContableEntries(createContableEntriesDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            contableEntries
        })
    }
    @Get('/')
    @ApiOperation({ summary: 'Obtener lista de ContableEntriess' })
    async getContableEntriess(@Res() res,){
        const contableEntries = await this.contableEntriesService.getContableEntriess();
        return res.status(HttpStatus.OK).json(contableEntries)
    }
  
    @Get('/:ContableEntriesID')
    @ApiOperation({ summary: 'Obtener un ContableEntries usando el ID' })
    @ApiParam({ name: 'ContableEntriesID', description: 'ID del ContableEntries', type: String })
    async getContableEntries(@Res() res, @Param('ContableEntriesID') ContableEntriesID){
        const contableEntries = await this.contableEntriesService.getContableEntries(ContableEntriesID);
        if(!contableEntries) throw new NotFoundException('ContableEntries does not exists')
        return res.status(HttpStatus.OK).json(contableEntries)
    }
    @Put('/update/:ContableEntriesID')
    @ApiOperation({ summary: 'Actualizar un ContableEntries usando el ID' })
    @ApiParam({ name: 'ContableEntriesID', description: 'ID del ContableEntries', type: String })
    async updateContableEntries(@Res() res, @Param('ContableEntriesID') ContableEntriesID, @Body() createContableEntriesDTO:CreateContableEntriesDTO){
        const contableEntries = await this.contableEntriesService.updateContableEntries(ContableEntriesID, createContableEntriesDTO);
        if(!contableEntries) throw new NotFoundException('ContableEntries does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'contableEntries updated succesfully',
            contableEntries
        })
    }
    @Delete('/delete/:ContableEntriesID')
    @ApiOperation({ summary: 'Borrar un ContableEntries usando el ID' })
    @ApiParam({ name: 'ContableEntriesID', description: 'ID del ContableEntries', type: String })
    async deleteContableEntries(@Res() res, @Param('ContableEntriesID') ContableEntriesID){
        const contableEntries = await this.contableEntriesService.deleteContableEntries(ContableEntriesID);
        if(!contableEntries) throw new NotFoundException('ContableEntries does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'contableEntries deleted succesfully',
            contableEntries
        })
    } 
}
