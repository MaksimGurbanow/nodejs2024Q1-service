import { Injectable } from '@nestjs/common';
import { TrackRepository } from '../repositories/track/track.repository';
import { DbService } from 'src/infrasctructure/db/db.service';

@Injectable()
export class TrackService implements TrackRepository {
  constructor(private readonly DB: DbService) {}
}
