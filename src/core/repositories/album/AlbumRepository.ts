import { Album } from './interface/album.interface';
import { CreateAlbumDto, UpdateAlbumDto } from './dto/interface';

export interface AlbumRepository {
  getAll(): Album[];
  getById(id: string): Album;
  create(dto: CreateAlbumDto): void;
  update(id: string, dto: UpdateAlbumDto): void;
  remove(id: string): void;
}
