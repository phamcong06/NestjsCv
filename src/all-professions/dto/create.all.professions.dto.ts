import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HintQuestionEntity } from 'src/hint-question/entities/hint.question.entity';
import { CreateHintQuestionDTO } from 'src/hint-question/dto/create.hint.question.dto';
export class CreateAllProfessionsDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'name' })
  nameProfessions: string;
  // @ApiProperty()
  // hintquestion: HintQuestionEntity[];
}
