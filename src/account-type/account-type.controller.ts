import { Body, Controller, Get, Put, Delete, HttpStatus, Post, Res, Param, NotFoundException, Query, UseInterceptors } from '@nestjs/common';
import { CreateAccountTypeDTO } from 'src/dto/account-type.dto';
import { AccountTypeService } from './account-type.service';
import { ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { MongoService } from 'src/mongo.service';

@ApiTags('Account-type')
@Controller('account-type')
export class AccountTypeController {

    constructor(
        private readonly accountTypeService: AccountTypeService,
        private readonly mongoService: MongoService
    ){}

    @Post('/add')
    @ApiOperation({ summary: 'Añadir un AccountType' })
    async addAccountType(@Res() res, @Body() createAccountTypeDTO:CreateAccountTypeDTO){
        const accountType = await this.accountTypeService.addAccountType(createAccountTypeDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            accountType
        })
    }
    @Get('/')
    @ApiOperation({ summary: 'Obtener lista de AccountTypes' })
    async getAccountTypes(@Res() res,){
        const accountType = await this.accountTypeService.getAccountTypes();
        console.log('connected')
        return res.status(HttpStatus.OK).json(accountType)
    }
    @Get('/get')
    @ApiOperation({ summary: 'Obtener lista de AccountTypes' })
    getprueba(){
        return this.accountTypeService.getprueba()
    }

    @Get('/:AccountTypeID')
    @ApiOperation({ summary: 'Obtener un AccountType usando el ID' })
    @ApiParam({ name: 'AccountTypeID', description: 'ID del AccountType', type: String })
    async getAccountType(@Res() res, @Param('AccountTypeID') AccountTypeID){
        const accountType = await this.accountTypeService.getAccountType(AccountTypeID);
        if(!accountType) throw new NotFoundException('AccountType does not exists')
        return res.status(HttpStatus.OK).json(accountType)
    }
    @Put('/update/:AccountTypeID')
    @ApiOperation({ summary: 'Actualizar un AccountType usando el ID' })
    @ApiParam({ name: 'AccountTypeID', description: 'ID del AccountType', type: String })
    async updateAccountType(@Res() res, @Param('AccountTypeID') AccountTypeID, @Body() createAccountTypeDTO:CreateAccountTypeDTO){
        const accountType = await this.accountTypeService.updateAccountType(AccountTypeID, createAccountTypeDTO);
        if(!accountType) throw new NotFoundException('AccountType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountType updated succesfully',
            accountType
        })
    }
    @Delete('/delete/:AccountTypeID')
    @ApiOperation({ summary: 'Borrar un AccountType usando el ID' })
    @ApiParam({ name: 'AccountTypeID', description: 'ID del AccountType', type: String })
    async deleteAccountType(@Res() res, @Param('AccountTypeID') AccountTypeID){
        const accountType = await this.accountTypeService.deleteAccountType(AccountTypeID);
        if(!accountType) throw new NotFoundException('AccountType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountType deleted succesfully',
            accountType
        })
    }
    // @Delete('/delete')
    // async deleteAccountTypes(@Res() res, @Query('AccountTypeID') AccountTypeID){
    //     const accountType = await this.accountTypeService.deleteAccountType(AccountTypeID);
    //     if(!accountType) throw new NotFoundException('AccountType does not exists')
    //     return res.status(HttpStatus.OK).json({
    //         Message: 'accountType deleted succesfully with query',
    //         accountType
    //     })
    // }

}
