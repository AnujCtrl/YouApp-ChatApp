import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration global
    }),
    MongooseModule.forRoot('mongodb://chat-mongo:27017/chat-app'),
    AuthModule,
    ProfileModule,
    ChatModule,
    NotificationModule,
  ],
})
export class AppModule {}
