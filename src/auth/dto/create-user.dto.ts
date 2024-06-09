import { IsString, IsEmail, MinLength } from 'class-validator';
import { User } from 'src/profile/schemas/user.schema';
export class CreateUserDto extends User {
  @IsString()
  @MinLength(4)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
