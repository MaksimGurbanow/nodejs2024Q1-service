import { Album } from 'src/core/models/interface';

export interface AlbumRepository {
  getAll(): Album[];
}