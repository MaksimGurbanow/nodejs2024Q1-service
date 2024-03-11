import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/infrasctructure/db/db.service';
import { UserRepository } from '../repositories/user/user.repository';
import {
  CreateUserDto,
  UpdatePasswordDto,
} from '../repositories/user/dto/interface';
import { User } from '../interfaces/user.interface';
import { UserEntity } from '../entities/user.entity';
@Injectable()
export class UserService implements UserRepository {
  constructor(private readonly DB: DbService) {}

  async getAll() {
    return this.DB.users;
  }

  async getById(id: string) {
    const oneUser: User | undefined = this.DB.users.find(
      (user) => user.id === id,
    );

    if (!oneUser) {
      throw new HttpException(
        `User with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return oneUser;
  }

  async create(dto: CreateUserDto) {
    const newUser = new UserEntity(dto);

    if (this.DB.users.some((user) => user.id === newUser.id)) {
      throw new HttpException('User already exists.', HttpStatus.CONFLICT);
    }

    this.DB.users.push(newUser);
    return newUser;
  }

  async update(id: string, dto: UpdatePasswordDto) {
    const user = await this.getById(id);

    if (user.password !== dto.oldPassword) {
      throw new HttpException('Old password is wrong', HttpStatus.FORBIDDEN);
    }

    user.password = dto.newPassword;
    user.version += 1;
    user.updatedAt = Date.now();

    return user;
  }

  async remove(id: string) {
    const userToDelete = await this.getById(id);
    const index = this.DB.users.findIndex((u) => u.id === userToDelete.id);
    if (index !== -1) {
      this.DB.users.splice(index, 1);
    }
  }
}
