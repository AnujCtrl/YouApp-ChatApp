import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
