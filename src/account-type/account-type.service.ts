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

  public async addAccountType(
    createAccountTypeDTO: CreateAccountTypeDTO,
  ): Promise<AccountType> {
    const accountType = new this.accountTypeModel(createAccountTypeDTO);
    return await accountType.save();
  }

  public async getAccountTypes(): Promise<AccountType[]> {
    const accountType = await this.accountTypeModel.find();
    return accountType;
  }

  public async getAccountType(accountTypeID: string): Promise<AccountType> {
    const accountType = await this.accountTypeModel.findById(accountTypeID);
    return accountType;
  }

  public async updateAccountType(
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
  public async deleteAccountType(accountTypeID: string): Promise<AccountType> {
    const accountType = await this.accountTypeModel.findByIdAndDelete(
      accountTypeID,
    );
    return accountType;
  }

  public getprueba() {
    const datos = [{
      codigo: "001",
      descripcion: "Activos",
      origen: "Debito",
      estado: true
    },{
      codigo: "002",
      descripcion: "Pasivos",
      origen: "Credito",
      estado: true
    },{
      codigo: "003",
      descripcion: "Capital",
      origen: "Credito",
      estado: true
    },{
      codigo: "004",
      descripcion: "Ingresos",
      origen: "Credito",
      estado: true
    },{
      codigo: "005",
      descripcion: "Costos",
      origen: "Debito",
      estado: false
    },{
      codigo: "006",
      descripcion: "Gastos",
      origen: "Debito",
      estado: false
    },]
    return datos;
  }

}
