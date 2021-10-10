import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Role } from 'src/user/models/dtos/roles.enum';
import { UpdateResult } from 'typeorm';
import { CreateHintQuestionDTO } from './dto/create.hint.question.dto';
import { UpdateHintQuestionDTO } from './dto/update.hint.question.dto';
import { HintQuestionService } from './hint-question.service';

@Controller('hint-question')
export class HintQuestionController {
  constructor(private hintQuestionService: HintQuestionService) {}
  @Post()
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiCreatedResponse({ description: 'newHintQuestion' })
  async Create(@Body() newHintQuestion: CreateHintQuestionDTO) {
    return this.hintQuestionService.create(newHintQuestion);
  }
  @Put(':id')
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateUser(
    @Param('id') id: number,
    @Body() Update: UpdateHintQuestionDTO,
  ): Promise<UpdateResult> {
    return await this.hintQuestionService.update(id, Update);
  }
  @Delete(':question')
  @ApiBearerAuth('token')
  @hasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async delete(@Param('question') question: string): Promise<any> {
    this.hintQuestionService.delete(question);
    return { messeage: 'delete successs !!' };
  }
}
