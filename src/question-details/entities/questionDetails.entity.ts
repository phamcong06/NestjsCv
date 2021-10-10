import { HintQuestionEntity } from 'src/hint-question/entities/hint.question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('QuestionDetails')
export class QuestionDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  questionDetails: string;
  @ManyToOne(() => HintQuestionEntity, (question) => question.QuestionDetails)
  question: HintQuestionEntity;
}
