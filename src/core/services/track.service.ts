import { Injectable } from '@nestjs/common';
import { TrackRepository } from '../repositories/track/TrackRepository';

@Injectable()
export class TrackService {
  constructor(private readonly trackRepository: TrackRepository) {}

  getAll() {
    this.trackRepository.getAll();
  }
}
