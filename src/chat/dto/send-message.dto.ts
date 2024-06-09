import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class SendMessageDto {
  @IsString()
  sender: Types.ObjectId['_id'];

  @IsString()
  receiver: Types.ObjectId['_id'];

  @IsString()
  content: string;
}
