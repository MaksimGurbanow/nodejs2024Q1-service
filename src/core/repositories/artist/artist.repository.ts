import { Artist } from '../../interfaces/artist.interface';
import { CreateArtistDto, UpdateArtistDto } from './dto/interface';

export interface ArtistRepository {
  getAll(): Promise<Artist[]>;
  getById(id: string): Promise<Artist>;
  create(dto: CreateArtistDto): Promise<Artist>;
  update(id: string, dto: UpdateArtistDto): Promise<Artist>;
  remove(id: string): Promise<void>;
}
