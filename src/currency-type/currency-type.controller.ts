import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateCurrencyTypeDTO } from 'src/dto/currency-type.dto';
import { CurrencyTypeService } from './currency-type.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Currency-type')
@Controller('currency-type')
export class CurrencyTypeController {
    constructor(
        private readonly currencyTypeService: CurrencyTypeService
    ){}

    @Post('/add')
    @ApiOperation({ summary: 'Añadir un CurrencyType' })
    async addCurrencyType(@Res() res, @Body() createCurrencyTypeDTO:CreateCurrencyTypeDTO){
        const currencyType = await this.currencyTypeService.addCurrencyType(createCurrencyTypeDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            currencyType
        })
    }
    @Get('/')
    @ApiOperation({ summary: 'Obtener lista de CurrencyTypes' })
    async getCurrencyTypes(@Res() res,){
        const currencyType = await this.currencyTypeService.getCurrencyTypes();
        return res.status(HttpStatus.OK).json(currencyType)
    }
    @Get('/get')
    @ApiOperation({ summary: 'Obtener lista de AccountTypes' })
    getprueba(){
        return this.currencyTypeService.getprueba()
    }
    
    @Get('/:CurrencyTypeID')
    @ApiOperation({ summary: 'Obtener un CurrencyType usando el ID' })
    @ApiParam({ name: 'CurrencyTypeID', description: 'ID del CurrencyType', type: String })
    async getCurrencyType(@Res() res, @Param('CurrencyTypeID') CurrencyTypeID: string){
        const currencyType = await this.currencyTypeService.getCurrencyType(CurrencyTypeID);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json(currencyType)
    }
    @Put('/update/:CurrencyTypeID')
    @ApiOperation({ summary: 'Actualizar un CurrencyType usando el ID' })
    @ApiParam({ name: 'CurrencyTypeID', description: 'ID del CurrencyType', type: String })
    async updateCurrencyType(@Res() res, @Param('CurrencyTypeID') CurrencyTypeID, @Body() createCurrencyTypeDTO:CreateCurrencyTypeDTO){
        const currencyType = await this.currencyTypeService.updateCurrencyType(CurrencyTypeID, createCurrencyTypeDTO);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'currencyType updated succesfully',
            currencyType
        })
    }
    @Delete('/delete/:CurrencyTypeID')
    @ApiOperation({ summary: 'Borrar un CurrencyType usando el ID' })
    @ApiParam({ name: 'CurrencyTypeID', description: 'ID del CurrencyType', type: String })
    async deleteCurrencyType(@Res() res, @Param('CurrencyTypeID') CurrencyTypeID){
        const currencyType = await this.currencyTypeService.deleteCurrencyType(CurrencyTypeID);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'currencyType deleted succesfully',
            currencyType
        })
    }
    // @Delete('/delete')
    // async deleteCurrencyTypes(@Res() res, @Query('CurrencyTypeID') CurrencyTypeID){
    //     const currencyType = await this.currencyTypeService.deleteCurrencyType(CurrencyTypeID);
    //     if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
    //     return res.status(HttpStatus.OK).json({
    //         Message: 'currencyType deleted succesfully with query',
    //         currencyType
    //     })
    // }
}
