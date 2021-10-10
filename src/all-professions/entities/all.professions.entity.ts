import { CandidateInformationEntity } from 'src/candidate-information/entities/candidate.information.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
@Entity({ name: 'AllProfessions' })
export class AllProfessionsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  nameProfessions: string;
  @OneToOne(() => CandidateInformationEntity)
  @JoinColumn()
  candidateInformation: CandidateInformationEntity;
}
