import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Message } from './schemas/message.schema';
import { SendMessageDto } from './dto/send-message.dto';
import { User } from '../profile/schemas/user.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async sendMessage(sendMessageDto: SendMessageDto): Promise<Message> {
    const sender: Types.ObjectId['_id'] = await this.userModel
      .findOne({ userName: sendMessageDto.sender })
      .exec()['_id'];
    const receiver: Types.ObjectId['_id'] = await this.userModel
      .findOne({ userName: sendMessageDto.receiver })
      .exec()['_id'];
    const newMessage = new this.messageModel({
      sender,
      receiver,
      content: sendMessageDto.content,
    });
    return newMessage.save();
  }

  async viewMessages(userName: string): Promise<Message[]> {
    const receiver: Types.ObjectId['_id'] = await this.userModel
      .findOne({ userName })
      .exec()['_id'];
    return await this.messageModel.find({ receiver: receiver }).exec();
  }
}
