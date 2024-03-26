import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user/user.repository';
import {
  CreateUserDto,
  UpdatePasswordDto,
} from '../repositories/user/dto/interface';
import { UserEntity } from '../entities/user.entity';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return (await this.prisma.user.findMany()).map((v) => new UserEntity(v));
  }

  async getById(id: string) {
    const currentUser = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!currentUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return new UserEntity(currentUser);
  }

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.create({ data: dto });
    return new UserEntity(user);
  }

  async update(id: string, dto: UpdatePasswordDto) {
    const currentUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!currentUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (currentUser.password !== dto.oldPassword) {
      throw new HttpException('Old password does not match', 403);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        password: dto.newPassword,
        version: { increment: 1 },
      },
    });

    return new UserEntity(updatedUser);
  }

  async remove(id: string) {
    try {
      const deleteUser = await this.prisma.user.delete({
        where: { id },
      });
      return new UserEntity(deleteUser);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      throw error;
    }
  }
}
