import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateAccountContableDTO } from 'src/dto/account-contable.dto';
import { AccountContableService } from './account-contable.service';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Account-contable')
@Controller('account-contable')
export class AccountContableController {
    constructor(
        private readonly accountContableService: AccountContableService
    ){}

    @Post('/add')
    @ApiOperation({ summary: 'Añadir un AccountContable' })
    async addAccountContable(@Res() res, @Body() createAccountContableDTO:CreateAccountContableDTO){
        const accountContable = await this.accountContableService.addAccountContable(createAccountContableDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            accountContable
        })
    }
    @Get('/')
    @ApiOperation({ summary: 'Obtener lista de AccountContables' })
    async getAccountContables(@Res() res,){
        const accountContable = await this.accountContableService.getAccountContables();
        return res.status(HttpStatus.OK).json(accountContable)
    }
    @Get('/:AccountContableID')
    @ApiOperation({ summary: 'Obtener un AccountContable usando el ID' })
    @ApiParam({ name: 'AccountContableID', description: 'ID del AccountContable', type: String })
    async getAccountContable(@Res() res, @Param('AccountContableID') AccountContableID){
        const accountContable = await this.accountContableService.getAccountContable(AccountContableID);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json(accountContable)
    }
    @Put('/update/:AccountContableID')
    @ApiOperation({ summary: 'Actualizar un AccountContable usando el ID' })
    @ApiParam({ name: 'AccountContableID', description: 'ID del AccountContable', type: String })
    async updateAccountContable(@Res() res, @Param('AccountContableID') AccountContableID, @Body() createAccountContableDTO:CreateAccountContableDTO){
        const accountContable = await this.accountContableService.updateAccountContable(AccountContableID, createAccountContableDTO);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountContable updated succesfully',
            accountContable
        })
    }
    @Delete('/delete/:AccountContableID')
    @ApiOperation({ summary: 'Borrar un AccountContable usando el ID' })
    @ApiParam({ name: 'AccountContableID', description: 'ID del AccountContable', type: String })
    async deleteAccountContable(@Res() res, @Param('AccountContableID') AccountContableID){
        const accountContable = await this.accountContableService.deleteAccountContable(AccountContableID);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountContable deleted succesfully',
            accountContable
        })
    }
    // @Delete('/delete')
    // async deleteAccountContables(@Res() res, @Query('AccountContableID') AccountContableID){
    //     const accountContable = await this.accountContableService.deleteAccountContable(AccountContableID);
    //     if(!accountContable) throw new NotFoundException('AccountContable does not exists')
    //     return res.status(HttpStatus.OK).json({
    //         Message: 'accountContable deleted succesfully with query',
    //         accountContable
    //     })
    // }
}
