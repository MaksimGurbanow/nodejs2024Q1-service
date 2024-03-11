import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FavoritesRepository } from '../repositories/favorites/favorites.repository';
import { DbService } from 'src/infrasctructure/db/db.service';
import { Album } from '../interfaces/album.interface';
import { Artist } from '../interfaces/artist.interface';
import { Track } from '../interfaces/track.interface';

enum FavoriteType {
  Artists = 'artists',
  Albums = 'albums',
  Tracks = 'tracks',
}

export type Entity = Artist | Album | Track | null;

@Injectable()
export class FavoritesService implements FavoritesRepository {
  constructor(private readonly DB: DbService) {}

  async getAll() {
    const filterExistingEntities = (entities, favorites) =>
      favorites.map((id) => entities.find((e) => e.id === id)).filter((e) => e);

    return {
      artists: filterExistingEntities(
        this.DB.artists,
        this.DB.favorites.artists,
      ),
      albums: filterExistingEntities(this.DB.albums, this.DB.favorites.albums),
      tracks: filterExistingEntities(this.DB.tracks, this.DB.favorites.tracks),
    };
  }

  async create(id: string, type: string) {
    let entity: Entity = null;

    switch (type) {
      case 'artist':
      case 'album':
      case 'track':
        entity = this.DB[type + 's'].find((item: Entity) => item.id === id);

        if (!entity) {
          throw new HttpException(
            `${type} with ID ${id} not found`,
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }

        const alreadyInFavorites = this.DB.favorites[type + 's'].some(
          (favoriteItem: Entity) => favoriteItem.id === id,
        );
        if (alreadyInFavorites) {
          throw new Error(`${type} with ID ${id} is already in favorites`);
        }

        this.DB.favorites[type + 's'].push(id);
        break;

      default:
        throw new HttpException(`${type} type does not exist`, 404);
    }

    return entity;
  }

  private getFavoriteType(type: string): FavoriteType | undefined {
    switch (type) {
      case 'artist':
        return FavoriteType.Artists;
      case 'album':
        return FavoriteType.Albums;
      case 'track':
        return FavoriteType.Tracks;
      default:
        return undefined;
    }
  }

  async remove(id: string, type: string) {
    const favoriteType = this.getFavoriteType(type);
    if (!favoriteType) {
      throw new HttpException(
        `Type ${type} is not valid`,
        HttpStatus.NOT_FOUND,
      );
    }
    const index = this.DB.favorites[favoriteType].indexOf(id);
    if (index === -1) {
      throw new HttpException(
        `${
          type.charAt(0).toUpperCase() + type.slice(1)
        } with ID ${id} not found in favorites`,
        HttpStatus.NOT_FOUND,
      );
    }

    this.DB.favorites[favoriteType].splice(index, 1);
  }
}
