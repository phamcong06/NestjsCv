import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CandidateInformationService } from 'src/candidate-information/candidate-information.service';
import { UserService } from 'src/user/user.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateHintQuestionDTO } from './dto/create.hint.question.dto';
import { UpdateHintQuestionDTO } from './dto/update.hint.question.dto';
import { HintQuestionEntity } from './entities/hint.question.entity';

@Injectable()
export class HintQuestionService {
  constructor(
    @InjectRepository(HintQuestionEntity)
    private readonly hintquestionRepository: Repository<HintQuestionEntity>,
    private candidateInformationService: CandidateInformationService,
  ) {}
  async create(newHintQuestion: CreateHintQuestionDTO) {
    const information = await this.candidateInformationService.find(
      newHintQuestion.CandidateInformationId,
    );
    const question = await this.hintquestionRepository.create({
      question: newHintQuestion.question,
      Information: information,
    });
    question.Information.age = undefined;
    return this.hintquestionRepository.save(question);
  }
  async update(
    id: number,
    Update: UpdateHintQuestionDTO,
  ): Promise<UpdateResult> {
    return await this.hintquestionRepository.update(id, Update);
  }
  async delete(question: string): Promise<DeleteResult> {
    return this.hintquestionRepository.delete({
      question: question,
    });
  }
}
