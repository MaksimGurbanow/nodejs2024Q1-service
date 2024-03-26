import { Injectable, NotFoundException } from '@nestjs/common';
import { TrackRepository } from '../repositories/track/track.repository';
import {
  CreateTrackDto,
  UpdateTrackDto,
} from '../repositories/track/dto/interface';
import { PrismaService } from './prisma.service';
import { Prisma } from '.prisma/client/default';

@Injectable()
export class TrackService implements TrackRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.track.findMany();
  }

  async getById(id: string) {
    const currentTrack = await this.prisma.track.findUnique({
      where: { id },
    });
    if (!currentTrack) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return currentTrack;
  }

  async create(createTrackDto: CreateTrackDto) {
    return await this.prisma.track.create({ data: createTrackDto });
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    try {
      return await this.prisma.track.update({
        where: { id },
        data: updateTrackDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Track with id ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.track.delete({ where: { id } });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Track with id ${id} not found`);
      }
      throw error;
    }
  }
}
