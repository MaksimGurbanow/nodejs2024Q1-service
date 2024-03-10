import { Favorites } from '../interfaces/favorites.interface';

export class FavoritesEntity implements Favorites {
  tracks: string[];
  artists: string[];
  albums: string[];

  constructor({ tracks, artists, albums }: Partial<FavoritesEntity>) {
    this.tracks = tracks;
    this.albums = albums;
    this.artists = artists;
  }
}
