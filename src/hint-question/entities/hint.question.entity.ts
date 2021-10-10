import { AllProfessionsEntity } from 'src/all-professions/entities/all.professions.entity';
import { CandidateInformationEntity } from 'src/candidate-information/entities/candidate.information.entity';
import { QuestionDetailsEntity } from 'src/question-details/entities/questionDetails.entity';
import { UserEntity } from 'src/user/models/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'HintQuestion' })
export class HintQuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false })
  question: string;
  @ManyToOne(
    () => CandidateInformationEntity,
    (CandidateInformationEntity) => CandidateInformationEntity.hintQuestions,
  )
  Information: CandidateInformationEntity;
  @OneToMany(
    () => QuestionDetailsEntity,
    (QuestionDetails) => QuestionDetails.question,
  )
  QuestionDetails: QuestionDetailsEntity[];
}
