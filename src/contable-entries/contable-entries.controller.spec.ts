import { Test, TestingModule } from '@nestjs/testing';
import { ContableEntriesController } from './contable-entries.controller';

describe('ContableEntriesController', () => {
  let controller: ContableEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContableEntriesController],
    }).compile();

    controller = module.get<ContableEntriesController>(ContableEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
