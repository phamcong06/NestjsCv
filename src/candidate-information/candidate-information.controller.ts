import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Role } from 'src/user/models/dtos/roles.enum';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CandidateInformationService } from './candidate-information.service';
import { CreateCandidateInformationDTO } from './dto/candidate.information.dto';
import { UpdateCandidateInformationDTO } from './dto/update.candidate.information.dto';
@Controller('candidate-information')
export class CandidateInformationController {
  constructor(
    private CandidateInformationService: CandidateInformationService,
  ) {}
  @ApiBearerAuth('token')
  @hasRoles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiCreatedResponse({ description: 'UserInformation Registration' })
  async CreateCandidateInformation(
    @Body() registerDB: CreateCandidateInformationDTO,
  ) {
    return this.CandidateInformationService.CreateCandidateInformation(
      registerDB,
    );
  }
  @ApiBearerAuth('token')
  @hasRoles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() Update: UpdateCandidateInformationDTO,
  ): Promise<UpdateResult> {
    return await this.CandidateInformationService.update(id, Update);
  }
  @ApiBearerAuth('token')
  @hasRoles(Role.USER || Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.CandidateInformationService.delete(+id);
  }

}
