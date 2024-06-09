import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../profile/schemas/user.schema';

export class LoginDto extends User {
  @ApiProperty()
  username: string;

  @ApiProperty()
  _id: string;
}
