import { Test, TestingModule } from '@nestjs/testing';
import { QuestionDetailsController } from './question-details.controller';

describe('QuestionDetailsController', () => {
  let controller: QuestionDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionDetailsController],
    }).compile();

    controller = module.get<QuestionDetailsController>(QuestionDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
