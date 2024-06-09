import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello, welcome to the Chat App!"', () => {
      expect(appController.getHello()).toBe('Hello, welcome to the Chat App!');
    });

    it('should call getHello method from AppService', () => {
      const appServiceSpy = jest.spyOn(appService, 'getHello');
      appController.getHello();
      expect(appServiceSpy).toHaveBeenCalled();
    });
  });
});
