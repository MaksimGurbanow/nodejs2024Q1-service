import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TrackRepository } from '../repositories/track/track.repository';
import { DbEntities, DbService } from 'src/infrasctructure/db/db.service';
import { TrackEntity } from '../entities/track.entity';
import { Track } from '../interfaces/track.interface';
import {
  CreateTrackDto,
  UpdateTrackDto,
} from '../repositories/track/dto/interface';

@Injectable()
export class TrackService implements TrackRepository {
  constructor(private readonly DB: DbService) {}

  async getAll() {
    return this.DB.tracks;
  }

  async getById(id: string) {
    const oneTrack: Track | undefined = this.DB.tracks.find(
      (Track) => Track.id === id,
    );

    if (!oneTrack) {
      throw new HttpException(
        `Track with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return oneTrack;
  }

  async create(createTrackDto: CreateTrackDto) {
    const conditionArtist = this.DB.verifyEntityPresence(
      createTrackDto.artistId,
      DbEntities.ARTISTS,
    );
    const conditionAlbum = this.DB.verifyEntityPresence(
      createTrackDto.albumId,
      DbEntities.ALBUMS,
    );
    if (conditionArtist && createTrackDto.artistId) {
      throw new HttpException(
        `Artist with ID ${createTrackDto.artistId} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (conditionAlbum && createTrackDto.albumId) {
      throw new HttpException(
        `Album with ID ${createTrackDto.albumId} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const newTrack = new TrackEntity(createTrackDto);

    this.DB.tracks.push(newTrack);
    return newTrack;
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    const currentTrack = await this.getById(id);
    const conditionArtist = this.DB.verifyEntityPresence(
      updateTrackDto.artistId,
      DbEntities.ARTISTS,
    );
    const conditionAlbum = this.DB.verifyEntityPresence(
      updateTrackDto.albumId,
      DbEntities.ALBUMS,
    );
    if (conditionArtist && updateTrackDto.artistId) {
      throw new HttpException(
        `Artist with ID ${updateTrackDto.artistId} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (conditionAlbum && updateTrackDto.albumId) {
      throw new HttpException(
        `Album with ID ${updateTrackDto.albumId} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    currentTrack.albumId = updateTrackDto.albumId;
    currentTrack.artistId = updateTrackDto.artistId;
    currentTrack.duration = updateTrackDto.duration;
    currentTrack.name = updateTrackDto.name;

    return currentTrack;
  }

  async remove(id: string) {
    const TrackToDelete = await this.getById(id);
    const index = this.DB.tracks.findIndex((u) => u.id === TrackToDelete.id);
    if (index !== -1) {
      this.DB.tracks.splice(index, 1);
    }
  }
}
