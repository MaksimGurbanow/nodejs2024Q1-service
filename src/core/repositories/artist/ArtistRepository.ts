import { Artist } from 'src/core/models/interface';

export interface ArtistRepository {
  add(): Artist;
}
