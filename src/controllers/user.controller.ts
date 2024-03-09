import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/core/services/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): void {
    this.userService.getAll();
  }
}
