import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
export class FavoritesService {
  constructor(private db: DbService) {}
  async create(id: string, type: string) {
    let entity: Entity = null;

    switch (type) {
      case 'artist':
      case 'album':
      case 'track':
        entity = this.db[type + 's'].find((item: Entity) => item.id === id);

        if (!entity) {
          throw new HttpException(
            `${type} with ID ${id} not found`,
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }

        const alreadyInFavorites = this.db.favorites[type + 's'].some(
          (favoriteItem: Entity) => favoriteItem.id === id,
        );
        if (alreadyInFavorites) {
          throw new Error(`${type} with ID ${id} is already in favorites`);
        }

        this.db.favorites[type + 's'].push(id);
        break;

      default:
        throw new HttpException(`${type} type does not exist`, 404);
    }

    return entity;
  }

  getAll() {
    const filterExistingEntities = (entities, favorites) =>
      favorites.map((id) => entities.find((e) => e.id === id)).filter((e) => e);

    return {
      artists: filterExistingEntities(
        this.db.artists,
        this.db.favorites.artists,
      ),
      albums: filterExistingEntities(this.db.albums, this.db.favorites.albums),
      tracks: filterExistingEntities(this.db.tracks, this.db.favorites.tracks),
    };
  }

  remove(id: string, type: string) {
    const favoriteType = this.getFavoriteType(type);
    if (!favoriteType) {
      throw new NotFoundException(`Type ${type} is not valid`);
    }

    const index = this.db.favorites[favoriteType].indexOf(id);
    if (index === -1) {
      throw new NotFoundException(
        `${
          type.charAt(0).toUpperCase() + type.slice(1)
        } with ID ${id} not found in favorites`,
      );
    }

    this.db.favorites[favoriteType].splice(index, 1);
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
}
