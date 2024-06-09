import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class SendMessageDto {
  @ApiProperty()
  @IsString()
  sender: Types.ObjectId['_id'];
  @ApiProperty()
  @IsString()
  receiver: Types.ObjectId['_id'];
  @ApiProperty()
  @IsString()
  content: string;
}
