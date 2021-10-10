import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCandidateInformationDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'name' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: 'number', description: 'age' })
  age: number;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: 'email', description: 'Email', default: '@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(13)
  @Matches(/^\+84[1-9]\d{1,14}$/)
  @ApiProperty({ type: 'string', description: 'phoneNumber', default: '+84' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'address' })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'linkfb' })
  linkfb: string;
}
