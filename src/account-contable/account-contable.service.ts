import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountContableDTO } from 'src/dto/account-contable.dto';
import { AccountContable } from 'src/interfaces/account-contable.interface';

@Injectable()
export class AccountContableService {
    constructor(
        @InjectModel('AccountContable')
        private readonly accountContableModel: Model<AccountContable>,
      ) {}
    
      public async addAccountContable(
        createAccountContableDTO: CreateAccountContableDTO,
      ): Promise<AccountContable> {
        const accountContable = new this.accountContableModel(createAccountContableDTO);
        return await accountContable.save();
      }
    
      public async getAccountContables(): Promise<AccountContable[]> {
        const accountContable = await this.accountContableModel.find();
        return accountContable;
      }
    
      public async getAccountContable(accountContableID: string): Promise<AccountContable> {
        const accountContable = await this.accountContableModel.findById(accountContableID);
        return accountContable;
      }
    
      public async updateAccountContable(
        accountContableID: string,
        createAccountContableDTO: CreateAccountContableDTO,
      ): Promise<AccountContable> {
        const accountContable = await this.accountContableModel.findByIdAndUpdate(
          accountContableID,
          createAccountContableDTO,
          { new: true },
        );
        return accountContable;
      }
      public async deleteAccountContable(accountContableID: string): Promise<AccountContable> {
        const accountContable = await this.accountContableModel.findByIdAndDelete(
          accountContableID,
        );
        return accountContable;
      }
}
