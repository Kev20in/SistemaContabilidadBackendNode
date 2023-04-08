import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyTypeController } from './currency-type.controller';

describe('CurrencyTypeController', () => {
  let controller: CurrencyTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyTypeController],
    }).compile();

    controller = module.get<CurrencyTypeController>(CurrencyTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
