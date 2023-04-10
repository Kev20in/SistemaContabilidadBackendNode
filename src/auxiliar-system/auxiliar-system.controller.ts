import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateAuxiliarSystemDTO } from 'src/dto/auxiliar-system.dto';
import { AuxiliarSystemService } from './auxiliar-system.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Auxiliar-system')
@Controller('auxiliar-system')
export class AuxiliarSystemController {
    constructor(
        private readonly accountTypeService: AuxiliarSystemService
    ){}

    @Post('/add')
    @ApiOperation({ summary: 'Añadir un AuxiliarSystem' })
    async addAuxiliarSystem(@Res() res, @Body() createAuxiliarSystemDTO:CreateAuxiliarSystemDTO){
        const auxiliarSystem = await this.accountTypeService.addAuxiliarSystem(createAuxiliarSystemDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            auxiliarSystem
        })
    }
    @Get('/')
    @ApiOperation({ summary: 'Obtener lista de AuxiliarSystems' })
    async getAuxiliarSystems(@Res() res,){
        const auxiliarSystem = await this.accountTypeService.getAuxiliarSystems();
        return res.status(HttpStatus.OK).json(auxiliarSystem)
    }
    @Get('/get')
    @ApiOperation({ summary: 'Obtener lista de AccountTypes' })
    getprueba(){
        return this.accountTypeService.getprueba()
    }

    @Get('/:AuxiliarSystemID')
    @ApiOperation({ summary: 'Obtener un AuxiliarSystem usando el ID' })
    @ApiParam({ name: 'AuxiliarSystemID', description: 'ID del AuxiliarSystem', type: String })
    async getAuxiliarSystem(@Res() res, @Param('AuxiliarSystemID') AuxiliarSystemID){
        const auxiliarSystem = await this.accountTypeService.getAuxiliarSystem(AuxiliarSystemID);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json(auxiliarSystem)
    }
    @Put('/update/:AuxiliarSystemID')
    @ApiOperation({ summary: 'Actualizar un AuxiliarSystem usando el ID' })
    @ApiParam({ name: 'AuxiliarSystemID', description: 'ID del AuxiliarSystem', type: String })
    async updateAuxiliarSystem(@Res() res, @Param('AuxiliarSystemID') AuxiliarSystemID, @Body() createAuxiliarSystemDTO:CreateAuxiliarSystemDTO){
        const auxiliarSystem = await this.accountTypeService.updateAuxiliarSystem(AuxiliarSystemID, createAuxiliarSystemDTO);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'auxiliarSystem updated succesfully',
            auxiliarSystem
        })
    }
    @Delete('/delete/:AuxiliarSystemID')
    @ApiOperation({ summary: 'Borrar un AuxiliarSystem usando el ID' })
    @ApiParam({ name: 'AuxiliarSystemID', description: 'ID del AuxiliarSystem', type: String })
    async deleteAuxiliarSystem(@Res() res, @Param('AuxiliarSystemID') AuxiliarSystemID){
        const auxiliarSystem = await this.accountTypeService.deleteAuxiliarSystem(AuxiliarSystemID);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'auxiliarSystem deleted succesfully',
            auxiliarSystem
        })
    }
    // @Delete('/delete')
    // async deleteAuxiliarSystems(@Res() res, @Query('AuxiliarSystemID') AuxiliarSystemID){
    //     const auxiliarSystem = await this.accountTypeService.deleteAuxiliarSystem(AuxiliarSystemID);
    //     if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
    //     return res.status(HttpStatus.OK).json({
    //         Message: 'auxiliarSystem deleted succesfully with query',
    //         auxiliarSystem
    //     })
    // }
}
