import { Test, TestingModule } from '@nestjs/testing';
import { QuestionDetailsService } from './question-details.service';

describe('QuestionDetailsService', () => {
  let service: QuestionDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionDetailsService],
    }).compile();

    service = module.get<QuestionDetailsService>(QuestionDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
