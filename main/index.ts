import { Context, HttpRequest } from '@azure/functions';
import { AzureHttpAdapter } from '@nestjs/azure-func-http';
import { createApp } from '../src/main.azure';


export default async function(context: Context, req: HttpRequest): Promise<void> {
  AzureHttpAdapter.handle(createApp, context, req);

}
