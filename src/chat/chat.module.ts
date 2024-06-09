import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './schemas/message.schema';
import { ProfileModule } from '../profile/profile.module';
import { User, UserSchema } from '../profile/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Message.name,
        schema: MessageSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ProfileModule,
  ],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
