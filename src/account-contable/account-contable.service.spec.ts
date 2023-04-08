import { Test, TestingModule } from '@nestjs/testing';
import { AccountContableService } from './account-contable.service';

describe('AccountContableService', () => {
  let service: AccountContableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountContableService],
    }).compile();

    service = module.get<AccountContableService>(AccountContableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
