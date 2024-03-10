import { Track } from '../../interfaces/track.interface';
import { CreateTrackDto, UpdateTrackInfoDto } from './dto/interface';

export interface TrackRepository {
  getAll(): Track[];
  getById(id: string): Track;
  create(dto: CreateTrackDto): void;
  update(id: string, dto: UpdateTrackInfoDto): void;
  remove(id: string): void;
}
