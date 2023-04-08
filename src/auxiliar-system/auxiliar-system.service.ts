import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuxiliarSystemDTO } from 'src/dto/auxiliar-system.dto';
import { AuxiliarSystem } from 'src/interfaces/auxiliar-system.inteface';

@Injectable()
export class AuxiliarSystemService {
    constructor(
        @InjectModel('AuxiliarSystem')
        private readonly AuxiliarSystemModel: Model<AuxiliarSystem>,
      ) {}

      public async addAuxiliarSystem(
        createAuxiliarSystemDTO: CreateAuxiliarSystemDTO,
      ): Promise<AuxiliarSystem> {
        const AuxiliarSystem = new this.AuxiliarSystemModel(createAuxiliarSystemDTO);
        return await AuxiliarSystem.save();
      }
    
      public async getAuxiliarSystems(): Promise<AuxiliarSystem[]> {
        const AuxiliarSystem = await this.AuxiliarSystemModel.find();
        return AuxiliarSystem;
      }
    
      public async getAuxiliarSystem(AuxiliarSystemID: string): Promise<AuxiliarSystem> {
        const AuxiliarSystem = await this.AuxiliarSystemModel.findById(AuxiliarSystemID);
        return AuxiliarSystem;
      }
    
      public async updateAuxiliarSystem(
        AuxiliarSystemID: string,
        createAuxiliarSystemDTO: CreateAuxiliarSystemDTO,
      ): Promise<AuxiliarSystem> {
        const AuxiliarSystem = await this.AuxiliarSystemModel.findByIdAndUpdate(
          AuxiliarSystemID,
          createAuxiliarSystemDTO,
          { new: true },
        );
        return AuxiliarSystem;
      }
      public async deleteAuxiliarSystem(AuxiliarSystemID: string): Promise<AuxiliarSystem> {
        const AuxiliarSystem = await this.AuxiliarSystemModel.findByIdAndDelete(
          AuxiliarSystemID,
        );
        return AuxiliarSystem;
      }
}
