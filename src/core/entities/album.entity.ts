import { Album } from '../interfaces/album.interface';
import { v4 as uuid4 } from 'uuid';

export class AlbumEntity implements Album {
  id: string;
  name: string;
  artistId: string;
  year: number;

  constructor({ name, artistId, year }: Partial<AlbumEntity>) {
    this.id = uuid4();
    this.name = name;
    this.artistId = artistId;
    this.year = year;
  }
}
