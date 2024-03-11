import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { Album } from 'src/core/interfaces/album.interface';
import { Artist } from 'src/core/interfaces/artist.interface';
import { Favorites } from 'src/core/interfaces/favorites.interface';
import { Track } from 'src/core/interfaces/track.interface';

export const enum DbEntities {
  USERS = 'users',
  TRACKS = 'tracks',
  ARTISTS = 'artists',
  ALBUMS = 'albums',
}

export type Entities = (UserEntity | Track | Artist | Album)[];

@Injectable()
export class DbService {
  users: UserEntity[] = [];
  albums: Album[] = [];
  artists: Artist[] = [];
  tracks: Track[] = [];

  favorites: Favorites = {
    artists: [],
    albums: [],
    tracks: [],
  };

  verifyEntityPresence(entityId: string, entityType: DbEntities): boolean {
    const entities: Entities = this[entityType];
    const matchingEntity = entities.find((entity) => entity.id === entityId);
    return matchingEntity ? true : false;
  }
}
