import { Track } from 'src/core/models/interface';
import { CreateTrackDto, UpdateTrackInfoDto } from './dto/interface';

export interface TrackRepository {
  getAll(): Track[];

  getById(id: string | number): Track;

  create(dto: CreateTrackDto): void;

  update(dto: UpdateTrackInfoDto): void;

  delete(id: string | number): void;
}
