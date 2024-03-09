import { Injectable } from '@nestjs/common';
import { AlbumRepository } from '../repositories/album/AlbumRepository';

@Injectable()
export class AlbumService {
  constructor(private readonly albumRepository: AlbumRepository) {}

  getAll() {
    this.albumRepository.getAll();
  }
}
