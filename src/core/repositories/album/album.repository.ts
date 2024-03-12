import { Album } from '../../interfaces/album.interface';
import { CreateAlbumDto, UpdateAlbumDto } from './dto/interface';

export interface AlbumRepository {
  getAll(): Promise<Album[]>;
  getById(id: string): Promise<Album>;
  create(dto: CreateAlbumDto): Promise<Album>;
  update(id: string, dto: UpdateAlbumDto): Promise<Album>;
  remove(id: string): Promise<void>;
}
