import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

describe('ChatController', () => {
  let chatController: ChatController;
  let chatService: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatController],
      providers: [
        {
          provide: ChatService,
          useValue: {
            sendMessage: jest.fn().mockResolvedValue({}),
            viewMessages: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    chatController = module.get<ChatController>(ChatController);
    chatService = module.get<ChatService>(ChatService);
  });

  describe('sendMessage', () => {
    it('should send a message', async () => {
      const sendMessageDto: SendMessageDto = {
        fromUserId: '1',
        toUserId: '2',
        message: 'Hello',
      };
      await expect(chatController.sendMessage(sendMessageDto)).resolves.toEqual(
        {},
      );
    });
  });

  describe('viewMessages', () => {
    it('should return a list of messages', async () => {
      const userId = '1';
      await expect(chatController.viewMessages(userId)).resolves.toEqual([]);
    });
  });
});
