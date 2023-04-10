import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoService {
  private client: MongoClient;

  async connect() {
    try {
      const uri = 'mongodb://systembackenddb:JAftVZsjQOCRWXMAa1ByrBf4YO1iQtO3RUwkgffmNsIGAGDFMHgGvdoF2UJNatD7KwaQe9OPTenhACDbsQbXlg==@systembackenddb.mongo.cosmos.azure.com:10255/api?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@systembackenddb@';
      this.client = await MongoClient.connect(uri);
    } catch (error) {
      console.log('Error connecting to MongoDB:', error);
    }
  }

  getClient() {
    return this.client;
  }
}