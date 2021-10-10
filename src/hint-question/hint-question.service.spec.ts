import { Test, TestingModule } from '@nestjs/testing';
import { HintQuestionService } from './hint-question.service';

describe('HintQuestionService', () => {
  let service: HintQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HintQuestionService],
    }).compile();

    service = module.get<HintQuestionService>(HintQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
