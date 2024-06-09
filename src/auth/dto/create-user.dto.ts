import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';
import { User } from '../../profile/schemas/user.schema';
export class CreateUserDto extends User {
  @IsString()
  @MinLength(4)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsOptional()
  profilePicture?: string;

  @IsString()
  name: string;
  status: boolean;
}
