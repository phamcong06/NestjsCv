import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateInformationModule } from 'src/candidate-information/candidate-information.module';
import { CandidateInformationEntity } from 'src/candidate-information/entities/candidate.information.entity';
import { HintQuestionEntity } from './entities/hint.question.entity';
import { HintQuestionController } from './hint-question.controller';
import { HintQuestionService } from './hint-question.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([HintQuestionEntity, CandidateInformationEntity]),
    CandidateInformationModule,
  ],
  controllers: [HintQuestionController],
  providers: [HintQuestionService],
  exports: [HintQuestionService],
})
export class HintQuestionModule {}
