import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllProfessionsController } from './all-professions.controller';
import { AllProfessionsService } from './all-professions.service';
import { AllProfessionsEntity } from './entities/all.professions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AllProfessionsEntity])],
  controllers: [AllProfessionsController],
  providers: [AllProfessionsService],
  exports: [AllProfessionsService],
})
export class AllProfessionsModule {}
