import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class DeleteCandidateInformationDTO {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: 'number', description: 'id' })
  id: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'name' })
  name: string;
}
