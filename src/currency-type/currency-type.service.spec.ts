import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyTypeService } from './currency-type.service';

describe('CurrencyTypeService', () => {
  let service: CurrencyTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyTypeService],
    }).compile();

    service = module.get<CurrencyTypeService>(CurrencyTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
