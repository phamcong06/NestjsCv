import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateAllProfessionsDTO } from './dto/create.all.professions.dto';
import { UpdateAllProfessionsDTO } from './dto/update.all.professions.dto';
import { AllProfessionsEntity } from './entities/all.professions.entity';

@Injectable()
export class AllProfessionsService {
  constructor(
    @InjectRepository(AllProfessionsEntity)
    private allProfessionsRepository: Repository<AllProfessionsEntity>,
  ) {}
  async create(
    newAllProfessions: CreateAllProfessionsDTO,
  ): Promise<CreateAllProfessionsDTO> {
    return this.allProfessionsRepository.save(newAllProfessions);
  }
  async update(
    id: number,
    Update: UpdateAllProfessionsDTO,
  ): Promise<UpdateResult> {
    return await this.allProfessionsRepository.update(id, Update);
  }
  async delete(nameProfessions: string): Promise<DeleteResult> {
    return this.allProfessionsRepository.delete({
      nameProfessions: nameProfessions,
    });
  }
}
