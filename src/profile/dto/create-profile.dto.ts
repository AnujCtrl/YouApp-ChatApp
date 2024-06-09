import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProfileDto {
  user: Types.ObjectId;
  @ApiProperty()
  username: string;
  @ApiProperty()
  @IsString()
  interests: string[];
  @ApiProperty()
  @IsString()
  displayName: string;
  @ApiProperty()
  @IsOptional()
  horoscope: string;
  @ApiProperty()
  @IsOptional()
  zodiac: string;
  @ApiProperty()
  @IsOptional()
  height: string;
  @ApiProperty()
  @IsOptional()
  weight: string;
}
