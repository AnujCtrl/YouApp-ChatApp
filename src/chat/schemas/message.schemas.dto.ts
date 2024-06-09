import { IsString } from 'class-validator';

export class MessageDto {
  @IsString()
  readonly message: string;
}
