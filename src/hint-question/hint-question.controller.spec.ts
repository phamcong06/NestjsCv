import { Test, TestingModule } from '@nestjs/testing';
import { HintQuestionController } from './hint-question.controller';

describe('HintQuestionController', () => {
  let controller: HintQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HintQuestionController],
    }).compile();

    controller = module.get<HintQuestionController>(HintQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
