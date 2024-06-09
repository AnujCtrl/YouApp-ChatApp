import { IsString } from 'class-validator';

export class SendMessageDto {
  @IsString()
  fromUserId: string;

  @IsString()
  toUserId: string;

  @IsString()
  message: string;
}
