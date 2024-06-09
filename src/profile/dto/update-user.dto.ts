import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  email?: string;

  @IsString()
  @IsOptional()
  profilePicture?: string;

  @IsString()
  @IsOptional()
  interests?: string[];

  @IsString()
  @IsOptional()
  displayName?: string;

  @IsString()
  gender?: string;
  birthdate?: string;

  @IsString()
  @IsOptional()
  weight?: string;
  height?: string;
  zodiac?: string;
  horoscope?: string;
}
