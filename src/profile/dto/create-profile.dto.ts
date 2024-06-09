import { IsString, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProfileDto {
  user: Types.ObjectId;
  username: string;
  @IsString()
  interests: string[];
  displayName: string;
  @IsOptional()
  horoscope: string;
  zodiac: string;
  height: string;
  weight: string;
}
