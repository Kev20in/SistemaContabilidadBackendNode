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

      public getprueba() {
        const datos = [{
          codigo: '1',
        descripcion: 'Activos',
        permiteTransaciones: 'No',
        nivel: 1,
        cuentaMayor: '0',
        balance: 0,
        estado: true,
        tipoCuentaContableId: '1',
        tipoMonedaId: '1',
        },{
          codigo: '2',
        descripcion: 'Efectivo en caja y banco',
        permiteTransaciones: 'No',
        nivel: 2,
        cuentaMayor: '0',
        balance: 0,
        estado: true,
        tipoCuentaContableId: '1',
        tipoMonedaId: '1',
        },{
        codigo: '3',
        descripcion: 'Caja Chica',
        permiteTransaciones: 'Si',
        nivel: 3,
        cuentaMayor: '0',
        balance: 0,
        estado: false,
        tipoCuentaContableId: '1',
        tipoMonedaId: '1',
        },{
        codigo: '4',
        descripcion: 'Cuenta Corriente Banco x ',
        permiteTransaciones: 'Si',
        nivel: 3,
        cuentaMayor: '0',
        balance: 0,
        estado: false,
        tipoCuentaContableId: '1',
        tipoMonedaId: '1',
        },{
        codigo: '5',
        descripcion: 'Inventarios y Mercancias',
        permiteTransaciones: 'No',
        nivel: 3,
        cuentaMayor: '0',
        balance: 0,
        estado: true,
        tipoCuentaContableId: '1',
        tipoMonedaId: '1',
        },{
        codigo: '5',
        descripcion: 'Ventas',
        permiteTransaciones: 'No',
        nivel: 8,
        cuentaMayor: '0',
        balance: 1000,
        estado: true,
        tipoCuentaContableId: '1',
        tipoMonedaId: '1',
        },]
        return datos;
      }
}
