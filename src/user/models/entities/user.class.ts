import { IsEmail, IsString } from 'class-validator';
import { Role } from '../dtos/roles.enum';

export class User {
  userId?: string;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  role?: Role;
}
