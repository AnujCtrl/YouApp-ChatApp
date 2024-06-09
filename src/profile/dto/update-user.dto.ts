import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  email?: string;
  password?: string;
  name?: string;
  status?: boolean;
  gender?: string;
  birthdate?: string;
}
