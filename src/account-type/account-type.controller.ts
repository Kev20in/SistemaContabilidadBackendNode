import { Body, Controller, Get, Put, Delete, HttpStatus, Post, Res, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateAccountTypeDTO } from 'src/dto/account-type.dto';
import { AccountTypeService } from './account-type.service';

@Controller('account-type')
export class AccountTypeController {

    constructor(
        private readonly accountTypeService: AccountTypeService
    ){}

    @Post('/add')
    async addAccountType(@Res() res, @Body() createAccountTypeDTO:CreateAccountTypeDTO){
        const accountType = await this.accountTypeService.addAccountType(createAccountTypeDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            accountType
        })
    }
    @Get('/')
    async getAccountTypes(@Res() res,){
        const accountType = await this.accountTypeService.getAccountTypes();
        return res.status(HttpStatus.OK).json(accountType)
    }
    @Get('/:AccountTypeID')
    async getAccountType(@Res() res, @Param('AccountTypeID') AccountTypeID){
        const accountType = await this.accountTypeService.getAccountType(AccountTypeID);
        if(!accountType) throw new NotFoundException('AccountType does not exists')
        return res.status(HttpStatus.OK).json(accountType)
    }
    @Put('/update/:AccountTypeID')
    async updateAccountType(@Res() res, @Param('AccountTypeID') AccountTypeID){
        const accountType = await this.accountTypeService.getAccountType(AccountTypeID);
        return res.status(HttpStatus.OK).json(accountType)
    }
    @Delete('/delete/:AccountTypeID')
    async deleteAccountType(@Res() res, @Param('AccountTypeID') AccountTypeID){
        const accountType = await this.accountTypeService.deleteAccountType(AccountTypeID);
        if(!accountType) throw new NotFoundException('AccountType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountType deleted succesfully',
            accountType
        })
    }
    @Delete('/delete')
    async deleteAccountTypes(@Res() res, @Query('AccountTypeID') AccountTypeID){
        const accountType = await this.accountTypeService.deleteAccountType(AccountTypeID);
        if(!accountType) throw new NotFoundException('AccountType does not exists')
        return res.status(HttpStatus.OK).json({
            Message: 'accountType deleted succesfully with query',
            accountType
        })
    }

}
