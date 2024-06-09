import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../profile/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../profile/schemas/user.schema';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtService,
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findOne: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const createUserDto: CreateUserDto = {
        username: 'testuser',
        password: 'password',
        email: 'test@example.com',
        name: '',
        status: true,
        interests: [],
        displayName: '',
        gender: '',
        birthdate: '',
        horoscope: '',
        zodiac: '',
        height: '',
        weight: '',
      };
      jest.spyOn(authService, 'register').mockResolvedValue({} as User);

      await expect(authController.register(createUserDto)).resolves.toEqual(
        {} as User,
      );
    });
  });

  describe('login', () => {
    it('should return a JWT token', async () => {
      const req = { user: { username: 'testuser', _id: '1' } };
      const result = { access_token: 'token' };
      jest.spyOn(authService, 'login').mockResolvedValue(result);

      await expect(authController.login(req)).resolves.toEqual(result);
    });
  });
});
