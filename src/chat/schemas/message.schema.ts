import { IsString } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../profile/schemas/user.schema';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Message extends Document {
  @IsString()
  @Prop({ required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: User['_id'];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  receiver: User['_id'];
}

export const MessageSchema = SchemaFactory.createForClass(Message);
