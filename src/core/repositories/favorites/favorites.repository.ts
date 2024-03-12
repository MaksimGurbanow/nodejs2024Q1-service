import { Entity } from 'src/core/services/favorites.service';
import { Favorites } from '../../interfaces/favorites.interface';

export interface FavoritesRepository {
  getAll(): Favorites;
  create(id: string, type: string);
  remove(id: string, type: string): void;
}
