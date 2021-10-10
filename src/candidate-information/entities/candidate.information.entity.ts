import { HintQuestionEntity } from 'src/hint-question/entities/hint.question.entity';
import { UserEntity } from 'src/user/models/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity({ name: 'CandidateInformation' })
export class CandidateInformationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  linkfb: string;
  @ManyToOne(() => UserEntity, (User) => User.CandidateInformations)
  User: UserEntity;
  @OneToMany(
    () => HintQuestionEntity,
    (hintQuestions) => hintQuestions.Information,
  )
  hintQuestions: HintQuestionEntity[];
}
