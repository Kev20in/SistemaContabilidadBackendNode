import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCurrencyTypeDTO } from 'src/dto/currency-type.dto';
import { CurrencyType } from 'src/interfaces/currency-type.interface';

@Injectable()
export class CurrencyTypeService {
    constructor(
        @InjectModel('CurrencyType')
        private readonly currencyTypeModel: Model<CurrencyType>,
      ) {}
    
      public async addCurrencyType(
        createCurrencyTypeDTO: CreateCurrencyTypeDTO,
      ): Promise<CurrencyType> {
        const currencyType = new this.currencyTypeModel(createCurrencyTypeDTO);
        return await currencyType.save();
      }
    
      public async getCurrencyTypes(): Promise<CurrencyType[]> {
        const currencyType = await this.currencyTypeModel.find();
        return currencyType;
      }
    
      public async getCurrencyType(currencyTypeID: string): Promise<CurrencyType> {
        const currencyType = await this.currencyTypeModel.findById(currencyTypeID);
        return currencyType;
      }
    
      public async updateCurrencyType(
        currencyTypeID: string,
        createCurrencyTypeDTO: CreateCurrencyTypeDTO,
      ): Promise<CurrencyType> {
        const currencyType = await this.currencyTypeModel.findByIdAndUpdate(
          currencyTypeID,
          createCurrencyTypeDTO,
          { new: true },
        );
        return currencyType;
      }
      public async deleteCurrencyType(currencyTypeID: string): Promise<CurrencyType> {
        const currencyType = await this.currencyTypeModel.findByIdAndDelete(
          currencyTypeID,
        );
        return currencyType;
      }
}
