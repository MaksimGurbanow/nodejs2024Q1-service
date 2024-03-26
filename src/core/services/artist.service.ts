import { Injectable, NotFoundException } from '@nestjs/common';
import { ArtistRepository } from '../repositories/artist/artist.repository';
import {
  CreateArtistDto,
  UpdateArtistDto,
} from '../repositories/artist/dto/interface';
import { ArtistEntity } from '../entities/artist.entity';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ArtistService implements ArtistRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.artist.findMany();
  }

  async getById(id: string) {
    const currentArtist = await this.prisma.artist.findUnique({
      where: { id },
    });
    if (!currentArtist) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
    return currentArtist;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    try {
      return await this.prisma.artist.update({
        where: { id },
        data: updateArtistDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Artist with id ${id} not found`);
      }
      throw error;
    }
  }

  async create(createArtistDto: CreateArtistDto) {
    return await this.prisma.artist.create({ data: createArtistDto });
  }

  async remove(id: string) {
    try {
      const artist = await this.prisma.artist.delete({ where: { id } });
      return new ArtistEntity(artist);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Artist with id ${id} not found`);
      }
      throw error;
    }
  }
}
