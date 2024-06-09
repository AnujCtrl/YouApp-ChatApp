import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/message.schema';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  async sendMessage(sendMessageDto: SendMessageDto): Promise<Message> {
    const newMessage = new this.messageModel(sendMessageDto);
    return newMessage.save();
  }

  async viewMessages(userId: string): Promise<Message[]> {
    return this.messageModel.find({ toUserId: userId }).exec();
  }
}
