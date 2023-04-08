import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateAccountContableDTO } from 'src/dto/account-contable.dto';
import { AccountContableService } from './account-contable.service';

@Controller('account-contable')
export class AccountContableController {
    constructor(
        private readonly accountContableService: AccountContableService
    ){}

    @Post('/add')
    async addAccountContable(@Res() res, @Body() createAccountContableDTO:CreateAccountContableDTO){
        const accountContable = await this.accountContableService.addAccountContable(createAccountContableDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            accountContable
        })
    }
    @Get('/')
    async getAccountContables(@Res() res,){
        const accountContable = await this.accountContableService.getAccountContables();
        return res.status(HttpStatus.OK).json(accountContable)
    }
    @Get('/:AccountContableID')
    async getAccountContable(@Res() res, @Param('AccountContableID') AccountContableID){
        const accountContable = await this.accountContableService.getAccountContable(AccountContableID);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json(accountContable)
    }
    @Put('/update/:AccountContableID')
    async updateAccountContable(@Res() res, @Param('AccountContableID') AccountContableID, @Body() createAccountContableDTO:CreateAccountContableDTO){
        const accountContable = await this.accountContableService.updateAccountContable(AccountContableID, createAccountContableDTO);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountContable updated succesfully',
            accountContable
        })
    }
    @Delete('/delete/:AccountContableID')
    async deleteAccountContable(@Res() res, @Param('AccountContableID') AccountContableID){
        const accountContable = await this.accountContableService.deleteAccountContable(AccountContableID);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountContable deleted succesfully',
            accountContable
        })
    }
    @Delete('/delete')
    async deleteAccountContables(@Res() res, @Query('AccountContableID') AccountContableID){
        const accountContable = await this.accountContableService.deleteAccountContable(AccountContableID);
        if(!accountContable) throw new NotFoundException('AccountContable does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountContable deleted succesfully with query',
            accountContable
        })
    }
}
