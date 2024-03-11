import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AlbumRepository } from '../repositories/album/album.repository';
import { DbEntities, DbService } from 'src/infrasctructure/db/db.service';
import { Track } from '../interfaces/track.interface';
import {
  CreateAlbumDto,
  UpdateAlbumDto,
} from '../repositories/album/dto/interface';
import { AlbumEntity } from '../entities/album.entity';

@Injectable()
export class AlbumService implements AlbumRepository {
  constructor(private readonly DB: DbService) {}

  async getAll() {
    return this.DB.albums;
  }

  async getById(id: string) {
    const album = this.DB.albums.find((album) => album.id === id);
    return album;
  }

  async create(dto: CreateAlbumDto) {
    const conditionArtist = this.DB.verifyEntityPresence(
      dto.artistId,
      DbEntities.ARTISTS,
    );
    if (conditionArtist && dto.artistId) {
      throw new HttpException('Artist is not found', HttpStatus.NOT_FOUND);
    }
    const newAlbum = new AlbumEntity(dto);
    this.DB.albums.push(newAlbum);
    return newAlbum;
  }

  async update(id: string, dto: UpdateAlbumDto) {
    const currentAlbum = await this.getById(id);
    const conditionArtist = this.DB.verifyEntityPresence(
      dto.artistId,
      DbEntities.ARTISTS,
    );
    if (conditionArtist && dto.artistId) {
      throw new HttpException('Artist is not found', HttpStatus.NOT_FOUND);
    }
    currentAlbum.artistId = dto.artistId;
    currentAlbum.name = dto.name;
    currentAlbum.year = dto.year;
    return currentAlbum;
  }

  async remove(id: string) {
    const albumToDelete = await this.getById(id);
    const index = this.DB.albums.findIndex((u) => u.id === albumToDelete.id);
    this.DB.tracks.forEach((track: Track) => {
      if (track.albumId === id) {
        track.albumId = null;
      }
    });

    this.DB.favorites.albums = this.DB.favorites.albums.filter(
      (albumsId: string) => albumsId !== id,
    );

    if (index !== -1) {
      this.DB.albums.splice(index, 1);
    }
  }
}
