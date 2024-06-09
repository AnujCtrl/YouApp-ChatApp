import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('create')
  async createProfile(@Body() createUserDto: CreateUserDto) {
    return this.profileService.createProfile(createUserDto);
  }

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    return this.profileService.getProfile(id);
  }

  @Put('update/:id')
  async updateProfile(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.profileService.updateProfile(id, updateUserDto);
  }
}
