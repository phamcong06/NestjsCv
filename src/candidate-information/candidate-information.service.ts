import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCandidateInformationDTO } from './dto/candidate.information.dto';
import { UpdateCandidateInformationDTO } from './dto/update.candidate.information.dto';
import { CandidateInformationEntity } from './entities/candidate.information.entity';

@Injectable()
export class CandidateInformationService {
  constructor(
    @InjectRepository(CandidateInformationEntity)
    private candidateInformationRepository: Repository<CandidateInformationEntity>,
  ) {}
  async CreateCandidateInformation(
    userInformation: CreateCandidateInformationDTO,
  ) {
    return this.candidateInformationRepository.save(userInformation);
  }
  async update(
    id: number,
    Update: UpdateCandidateInformationDTO,
  ): Promise<UpdateResult> {
    return await this.candidateInformationRepository.update(id, Update);
  }
  async find(id: string) {
    return await this.candidateInformationRepository.findOne(id);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.candidateInformationRepository.delete(id);
  }
}
