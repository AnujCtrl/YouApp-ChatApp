import { Test, TestingModule } from '@nestjs/testing';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('ProfileController', () => {
  let profileController: ProfileController;
  let profileService: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileController],
      providers: [
        {
          provide: ProfileService,
          useValue: {
            createProfile: jest.fn().mockResolvedValue({}),
            getProfile: jest.fn().mockResolvedValue({}),
            updateProfile: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    profileController = module.get<ProfileController>(ProfileController);
    profileService = module.get<ProfileService>(ProfileService);
  });

  describe('createProfile', () => {
    it('should create a new profile', async () => {
      const createUserDto: CreateUserDto = {
        username: 'testuser',
        displayName: 'test',
        profilePicture: 'test.jpg',
        email: 'test@fmail.com',
        password: 'password',
        name: 'user',
        status: true,
        interests: [],
        gender: '',
        birthdate: '',
        horoscope: '',
        zodiac: '',
        height: '',
        weight: '',
      };
      await expect(
        profileController.createProfile(createUserDto),
      ).resolves.toEqual({});
    });
  });

  describe('getProfile', () => {
    it('should return a user profile', async () => {
      const userId = '1';
      await expect(profileController.getProfile(userId)).resolves.toEqual({});
    });
  });

  describe('updateProfile', () => {
    it('should update a user profile', async () => {
      const userId = '1';
      const updateUserDto: UpdateUserDto = {
        username: 'updateduser',
        profilePicture: 'updated.jpg',
        interests: ['test'],
        displayName: 'updated',
      };
      await expect(
        profileController.updateProfile(userId, updateUserDto),
      ).resolves.toEqual({});
    });
  });
});
