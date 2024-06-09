import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';
import { User } from '../../profile/schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto extends User {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  username: string;
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  @ApiProperty()
  @MinLength(8)
  password: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  profilePicture?: string;
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  status: boolean;
}
