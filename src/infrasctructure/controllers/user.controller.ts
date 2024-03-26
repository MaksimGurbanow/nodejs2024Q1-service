import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
  ParseUUIDPipe,
  Put,
  HttpCode,
} from '@nestjs/common';
import {
  CreateUserDto,
  UpdatePasswordDto,
} from 'src/core/repositories/user/dto/interface';
import { UserService } from 'src/core/services/user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.userService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return await this.userService.update(id, updatePasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async removeUser(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return await this.userService.remove(id);
  }
}
