import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateAuxiliarSystemDTO } from 'src/dto/auxiliar-system.dto';
import { AuxiliarSystemService } from './auxiliar-system.service';

@Controller('auxiliar-system')
export class AuxiliarSystemController {
    constructor(
        private readonly accountTypeService: AuxiliarSystemService
    ){}

    @Post('/add')
    async addAuxiliarSystem(@Res() res, @Body() createAuxiliarSystemDTO:CreateAuxiliarSystemDTO){
        const auxiliarSystem = await this.accountTypeService.addAuxiliarSystem(createAuxiliarSystemDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            auxiliarSystem
        })
    }
    @Get('/')
    async getAuxiliarSystems(@Res() res,){
        const auxiliarSystem = await this.accountTypeService.getAuxiliarSystems();
        return res.status(HttpStatus.OK).json(auxiliarSystem)
    }
    @Get('/:AuxiliarSystemID')
    async getAuxiliarSystem(@Res() res, @Param('AuxiliarSystemID') AuxiliarSystemID){
        const auxiliarSystem = await this.accountTypeService.getAuxiliarSystem(AuxiliarSystemID);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json(auxiliarSystem)
    }
    @Put('/update/:AuxiliarSystemID')
    async updateAuxiliarSystem(@Res() res, @Param('AuxiliarSystemID') AuxiliarSystemID, @Body() createAuxiliarSystemDTO:CreateAuxiliarSystemDTO){
        const auxiliarSystem = await this.accountTypeService.updateAuxiliarSystem(AuxiliarSystemID, createAuxiliarSystemDTO);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'auxiliarSystem updated succesfully',
            auxiliarSystem
        })
    }
    @Delete('/delete/:AuxiliarSystemID')
    async deleteAuxiliarSystem(@Res() res, @Param('AuxiliarSystemID') AuxiliarSystemID){
        const auxiliarSystem = await this.accountTypeService.deleteAuxiliarSystem(AuxiliarSystemID);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'auxiliarSystem deleted succesfully',
            auxiliarSystem
        })
    }
    @Delete('/delete')
    async deleteAuxiliarSystems(@Res() res, @Query('AuxiliarSystemID') AuxiliarSystemID){
        const auxiliarSystem = await this.accountTypeService.deleteAuxiliarSystem(AuxiliarSystemID);
        if(!auxiliarSystem) throw new NotFoundException('auxiliarSystem does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'auxiliarSystem deleted succesfully with query',
            auxiliarSystem
        })
    }
}
