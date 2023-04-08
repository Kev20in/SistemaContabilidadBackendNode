import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateCurrencyTypeDTO } from 'src/dto/currency-type.dto';
import { CurrencyTypeService } from './currency-type.service';

@Controller('currency-type')
export class CurrencyTypeController {
    constructor(
        private readonly currencyTypeService: CurrencyTypeService
    ){}

    @Post('/add')
    async addCurrencyType(@Res() res, @Body() createCurrencyTypeDTO:CreateCurrencyTypeDTO){
        const currencyType = await this.currencyTypeService.addCurrencyType(createCurrencyTypeDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            currencyType
        })
    }
    @Get('/')
    async getCurrencyTypes(@Res() res,){
        const currencyType = await this.currencyTypeService.getCurrencyTypes();
        return res.status(HttpStatus.OK).json(currencyType)
    }
    @Get('/:CurrencyTypeID')
    async getCurrencyType(@Res() res, @Param('CurrencyTypeID') CurrencyTypeID){
        const currencyType = await this.currencyTypeService.getCurrencyType(CurrencyTypeID);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json(currencyType)
    }
    @Put('/update/:CurrencyTypeID')
    async updateCurrencyType(@Res() res, @Param('CurrencyTypeID') CurrencyTypeID, @Body() createCurrencyTypeDTO:CreateCurrencyTypeDTO){
        const currencyType = await this.currencyTypeService.updateCurrencyType(CurrencyTypeID, createCurrencyTypeDTO);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'currencyType updated succesfully',
            currencyType
        })
    }
    @Delete('/delete/:CurrencyTypeID')
    async deleteCurrencyType(@Res() res, @Param('CurrencyTypeID') CurrencyTypeID){
        const currencyType = await this.currencyTypeService.deleteCurrencyType(CurrencyTypeID);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'currencyType deleted succesfully',
            currencyType
        })
    }
    @Delete('/delete')
    async deleteCurrencyTypes(@Res() res, @Query('CurrencyTypeID') CurrencyTypeID){
        const currencyType = await this.currencyTypeService.deleteCurrencyType(CurrencyTypeID);
        if(!currencyType) throw new NotFoundException('CurrencyType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'currencyType deleted succesfully with query',
            currencyType
        })
    }
}
