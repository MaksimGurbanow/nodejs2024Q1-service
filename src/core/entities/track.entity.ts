import { Track } from '../interfaces/track.interface';
import { v4 as uuid4 } from 'uuid';

export class TrackEntity implements Track {
  id: string;
  name: string;
  artistId: string;
  albumId: string;
  duration: number;

  constructor({ name, artistId, albumId, duration }: Partial<TrackEntity>) {
    this.id = uuid4();
    this.name = name;
    this.artistId = artistId;
    this.albumId = albumId;
    this.duration = duration;
  }
}
