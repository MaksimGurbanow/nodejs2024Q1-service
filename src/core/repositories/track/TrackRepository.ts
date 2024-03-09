import { Track } from 'src/core/models/interface';

export interface TrackRepository {
  getAll(): Track[];
}
