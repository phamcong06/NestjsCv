import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateCandidateInformationDTO } from './candidate.information.dto';
export class UpdateCandidateInformationDTO extends CreateCandidateInformationDTO {}
