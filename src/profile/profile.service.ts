import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>,
  ) {}

  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    const user = await this.userModel.findOne({
      username: createProfileDto.username,
    });
    if (!user) {
      throw new Error('User not found');
    }

    const newProfile = new this.profileModel({
      ...createProfileDto,
      user: user._id,
    });

    return newProfile.save();
  }

  async getProfile(userName: string): Promise<Profile> {
    return this.profileModel.findOne({ userName }).exec();
  }

  async updateProfile(
    userName: string,
    updateProfileDto: CreateProfileDto,
  ): Promise<Profile> {
    return this.profileModel
      .findOneAndUpdate({ userName }, { $set: updateProfileDto }, { new: true })
      .exec();
  }
}
