import { Injectable, NotFoundException } from '@nestjs/common';
import { AlbumRepository } from '../repositories/album/album.repository';
import {
  CreateAlbumDto,
  UpdateAlbumDto,
} from '../repositories/album/dto/interface';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AlbumService implements AlbumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.album.findMany();
  }

  async getById(id: string) {
    const album = await this.prisma.album.findUnique({ where: { id } });
    if (!album) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }
    return album;
  }

  async create(createAlbumDto: CreateAlbumDto) {
    return await this.prisma.album.create({ data: createAlbumDto });
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    try {
      return await this.prisma.album.update({
        where: { id },
        data: updateAlbumDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Album with id ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.album.delete({ where: { id } });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Album with id ${id} not found`);
      }
      throw error;
    }
  }
}
