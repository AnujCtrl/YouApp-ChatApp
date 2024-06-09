import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @ApiProperty()
  email?: string;
  password?: string;
  name?: string;
  status?: boolean;
  gender?: string;
  birthdate?: string;
}
