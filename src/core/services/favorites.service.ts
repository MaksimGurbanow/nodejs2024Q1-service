import { Injectable } from '@nestjs/common';
import { FavoritesRepository } from '../repositories/favorites/FavoritesRepository';

@Injectable()
export class FavoritesService {
  constructor(private readonly favoritesRepository: FavoritesRepository) {}

  getAll() {
    this.favoritesRepository.getAll();
  }
}