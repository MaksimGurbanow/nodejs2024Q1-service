import { Track } from '../../interfaces/track.interface';
import { CreateTrackDto, UpdateTrackInfoDto } from './dto/interface';

export interface TrackRepository {
  getAll(): Promise<Track[]>;
  getById(id: string): Promise<Track>;
  create(dto: CreateTrackDto): Promise<Track>;
  update(id: string, dto: UpdateTrackInfoDto): Promise<Track>;
  remove(id: string): Promise<void>;
}
