import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Profile extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop([String])
  interests: string[];

  @Prop()
  displayName: string;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: string;

  @Prop()
  weight: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
