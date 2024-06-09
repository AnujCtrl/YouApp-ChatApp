import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UsersService } from './users.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('create')
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.createProfile(createProfileDto);
  }

  @Get(':userName')
  async getProfile(@Param('userName') userName: string) {
    return this.profileService.getProfile(userName);
  }

  @Put('update/:userName')
  async updateProfile(
    @Param('userName') userName: string,
    @Body() updateProfileDto: CreateProfileDto,
  ) {
    return this.profileService.updateProfile(userName, updateProfileDto);
  }
}
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
