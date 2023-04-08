import { Test, TestingModule } from '@nestjs/testing';
import { ContableEntriesService } from './contable-entries.service';

describe('ContableEntriesService', () => {
  let service: ContableEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContableEntriesService],
    }).compile();

    service = module.get<ContableEntriesService>(ContableEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
