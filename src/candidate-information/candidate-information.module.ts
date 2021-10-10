import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateInformationController } from './candidate-information.controller';
import { CandidateInformationService } from './candidate-information.service';
import { CandidateInformationEntity } from './entities/candidate.information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CandidateInformationEntity])],
  controllers: [CandidateInformationController],
  providers: [CandidateInformationService],
  exports: [CandidateInformationService],
})
export class CandidateInformationModule {}
