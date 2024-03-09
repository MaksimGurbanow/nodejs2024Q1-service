import { Injectable } from '@nestjs/common';
import { TrackRepository } from '../repositories/track/TrackRepository';

@Injectable()
export class TrackService {
  constructor(private readonly trackRepository: TrackRepository) {}

  add() {
    this.trackRepository.add();
  }
}
