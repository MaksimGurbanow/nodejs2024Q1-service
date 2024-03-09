import { Artist } from 'src/core/models/interface';

export interface ArtistRepository {
  getAll(): Artist[];
}
