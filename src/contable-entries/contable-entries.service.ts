import { Body, Delete, Get, HttpStatus, Injectable, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { CreateContableEntriesDTO } from 'src/dto/contable-entries.dto';
import { ContableEntries } from 'src/interfaces/contable-entries.interface';

@Injectable()
export class ContableEntriesService {
    constructor(
        @InjectModel('ContableEntries')
        private readonly contableEntrieseModel: Model<ContableEntries>,
      ) {}
    
      public async addContableEntries(
        createContableEntriesDTO: CreateContableEntriesDTO,
      ): Promise<ContableEntries> {
        const contableEntriese = new this.contableEntrieseModel(createContableEntriesDTO);
        return await contableEntriese.save();
      }
    
      public async getContableEntriess(): Promise<ContableEntries[]> {
        const contableEntriese = await this.contableEntrieseModel.find();
        return contableEntriese;
      }
    
      public async getContableEntries(contableEntrieseID: string): Promise<ContableEntries> {
        const contableEntriese = await this.contableEntrieseModel.findById(contableEntrieseID);
        return contableEntriese;
      }
    
      public async updateContableEntries(
        contableEntrieseID: string,
        createContableEntriesDTO: CreateContableEntriesDTO,
      ): Promise<ContableEntries> {
        const contableEntriese = await this.contableEntrieseModel.findByIdAndUpdate(
          contableEntrieseID,
          createContableEntriesDTO,
          { new: true },
        );
        return contableEntriese;
      }
      public async deleteContableEntries(contableEntrieseID: string): Promise<ContableEntries> {
        const contableEntriese = await this.contableEntrieseModel.findByIdAndDelete(
          contableEntrieseID,
        );
        return contableEntriese;
      }
}
