import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':username')
  async getUser(@Param() params) {
    const res = await this.userService.getUser(params);
    return {
      name: res.data.name,
      website: res.data.blog,
      avatar: res.data.avatar_url,
      user_profile: res.data.url,
    };
  }
}
