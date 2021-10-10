import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AllProfessionsService } from './all-professions.service';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateAllProfessionsDTO } from './dto/create.all.professions.dto';
import { UpdateAllProfessionsDTO } from './dto/update.all.professions.dto';
import { UpdateResult } from 'typeorm';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/user/models/dtos/roles.enum';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { RolesGuard } from 'src/auth/guard/role.guard';
@Controller('all-professions')
export class AllProfessionsController {
  constructor(private AllProfessionsService: AllProfessionsService) {}
  @Post()
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiCreatedResponse({ description: 'newAllProfessions' })
  async Create(@Body() newAllProfessions: CreateAllProfessionsDTO) {
    return this.AllProfessionsService.create(newAllProfessions);
  }
  @Put(':id')
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateUser(
    @Param('id') id: number,
    @Body() Update: UpdateAllProfessionsDTO,
  ): Promise<UpdateResult> {
    return await this.AllProfessionsService.update(id, Update);
  }
  @Delete(':nameProfessions')
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async delete(
    @Param('nameProfessions') nameProfessions: string,
  ): Promise<any> {
    this.AllProfessionsService.delete(nameProfessions);
    return { messeage: 'delete successs !!' };
  }
}
