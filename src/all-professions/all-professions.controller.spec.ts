import { Test, TestingModule } from '@nestjs/testing';
import { AllProfessionsController } from './all-professions.controller';

describe('AllProfessionsController', () => {
  let controller: AllProfessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllProfessionsController],
    }).compile();

    controller = module.get<AllProfessionsController>(AllProfessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
