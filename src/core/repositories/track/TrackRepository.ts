import { Track } from 'src/core/models/interface';

export interface TrackRepository {
  add(): Track;
}
