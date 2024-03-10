import { Artist } from '../../interfaces/artist.interface';
import { CreateArtistDto, UpdateArtistDto } from './dto/interface';

export interface ArtistRepository {
  getAll(): Artist[];
  getById(id: string | number): Artist;
  create(dto: CreateArtistDto): void;
  update(id: string, dto: UpdateArtistDto): void;
  remove(id: string): void;
}
