import { Test, TestingModule } from '@nestjs/testing';
import { AuxiliarSystemService } from './auxiliar-system.service';

describe('AuxiliarSystemService', () => {
  let service: AuxiliarSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuxiliarSystemService],
    }).compile();

    service = module.get<AuxiliarSystemService>(AuxiliarSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
