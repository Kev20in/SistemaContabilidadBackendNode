import { Test, TestingModule } from '@nestjs/testing';
import { AccountContableController } from './account-contable.controller';

describe('AccountContableController', () => {
  let controller: AccountContableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountContableController],
    }).compile();

    controller = module.get<AccountContableController>(AccountContableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
