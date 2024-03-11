import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ArtistRepository } from '../repositories/artist/artist.repository';
import { DbService } from 'src/infrasctructure/db/db.service';
import {
  CreateArtistDto,
  UpdateArtistDto,
} from '../repositories/artist/dto/interface';
import { Track } from '../interfaces/track.interface';
import { ArtistEntity } from '../entities/artist.entity';

@Injectable()
export class ArtistService implements ArtistRepository {
  constructor(private readonly DB: DbService) {}

  async getAll() {
    return this.DB.artists;
  }

  async getById(id: string) {
    const artist = this.DB.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new HttpException(
        `Artist with ID ${id} doesn't exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return artist;
  }

  async update(id: string, dto: UpdateArtistDto) {
    const artistToUpdate = await this.getById(id);

    artistToUpdate.name = dto.name;
    artistToUpdate.grammy = dto.grammy;

    return artistToUpdate;
  }

  async create(createArtistDto: CreateArtistDto): Promise<ArtistEntity> {
    const newArtist = new ArtistEntity(createArtistDto);
    this.DB.artists.push(newArtist);
    return newArtist;
  }

  async remove(id: string) {
    const artistExists = this.DB.artists.some((artist) => artist.id === id);
    if (!artistExists) {
      throw new HttpException(
        `Artist with ID ${id} doesn't exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    this.DB.tracks.forEach((track: Track) => {
      if (track.artistId === id) {
        track.artistId = null;
      }
    });

    this.DB.albums.forEach((album) => {
      if (album.artistId === id) {
        album.artistId = null;
      }
    });

    this.DB.favorites.artists = this.DB.favorites.artists.filter(
      (storedId) => storedId !== id,
    );

    this.DB.artists = this.DB.artists.filter((artist) => artist.id !== id);
  }
}
