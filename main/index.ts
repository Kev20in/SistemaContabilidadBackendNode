import { Context, HttpRequest } from '@azure/functions';
import { AzureHttpAdapter } from '@nestjs/azure-func-http';
import { createApp } from '../src/main.azure';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(process.env.MONGODB_URI)


export default async function(context: Context, req: HttpRequest): Promise<void> {
  AzureHttpAdapter.handle(createApp, context, req);

  try {
    const database = await mongoClient.db(process.env.MONGODB_DATABASE);
  } catch (error){
    context.res = {
     "status": 500,
     "headers": {
      "contentype": "application/json"
     },
     "body": {
      "message": error.toString()
     }
    }
  }


}
