import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class MailEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @ApiProperty()
  email: string;
  @Column()
  @ApiProperty()
  name: string;
}
