import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class NotificationService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'notifications',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  async sendNotification(message: any) {
    return this.client.send({ cmd: 'new_message_from' }, message);
  }
}
