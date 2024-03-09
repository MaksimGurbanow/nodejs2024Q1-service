import { Injectable } from '@nestjs/common';
import { ArtistRepository } from '../repositories/artist/ArtistRepository';

@Injectable()
export class ArtistService {
  constructor(private readonly artistRepository: ArtistRepository) {}

  add() {
    this.artistRepository.add();
  }
}
