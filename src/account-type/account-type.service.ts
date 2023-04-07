import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountType } from '../interfaces/account-type.inteface';
import { CreateAccountTypeDTO } from '../dto/account-type.dto';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectModel('AccountType')
    private readonly accountTypeModel: Model<AccountType>,
  ) {}

  async addAccountType(
    createAccountTypeDTO: CreateAccountTypeDTO,
  ): Promise<AccountType> {
    const accountType = new this.accountTypeModel(createAccountTypeDTO);
    return await accountType.save();
  }

  async getAccountTypes(): Promise<AccountType[]> {
    const accountType = await this.accountTypeModel.find();
    return accountType;
  }

  async getAccountType(accountTypeID: string): Promise<AccountType> {
    const accountType = await this.accountTypeModel.findById(accountTypeID);
    return accountType;
  }

  async updateAccountType(
    accountTypeID: string,
    createAccountTypeDTO: CreateAccountTypeDTO,
  ): Promise<AccountType> {
    const accountType = await this.accountTypeModel.findByIdAndUpdate(
      accountTypeID,
      createAccountTypeDTO,
      { new: true },
    );
    return accountType;
  }
  async deleteAccountType(accountTypeID: string): Promise<AccountType> {
    const accountType = await this.accountTypeModel.findByIdAndDelete(
      accountTypeID,
    );
    return accountType;
  }
}
