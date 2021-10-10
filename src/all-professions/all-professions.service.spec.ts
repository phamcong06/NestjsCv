import { Test, TestingModule } from '@nestjs/testing';
import { AllProfessionsService } from './all-professions.service';

describe('AllProfessionsService', () => {
  let service: AllProfessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllProfessionsService],
    }).compile();

    service = module.get<AllProfessionsService>(AllProfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
