import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateHintQuestionDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'question' })
  question: string;

  @ApiProperty({ type: 'string' })
  CandidateInformationId: string;
}
