import { Injectable } from '@nestjs/common';
import { ArtistRepository } from '../repositories/artist/ArtistRepository';

@Injectable()
export class ArtistService {
  constructor(private readonly artistRepository: ArtistRepository) {}

  getAll() {
    this.artistRepository.getAll();
  }
}
