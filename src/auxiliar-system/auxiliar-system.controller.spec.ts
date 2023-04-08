import { Test, TestingModule } from '@nestjs/testing';
import { AuxiliarSystemController } from './auxiliar-system.controller';

describe('AuxiliarSystemController', () => {
  let controller: AuxiliarSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuxiliarSystemController],
    }).compile();

    controller = module.get<AuxiliarSystemController>(AuxiliarSystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
