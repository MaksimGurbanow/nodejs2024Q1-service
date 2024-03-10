import { Favorites } from '../../interfaces/favorites.interface';

export interface FavoritesRepository {
  getAll(): Favorites[];
  getById(id: string): Favorites;
  create(id: string, type: string): void;
  remove(id: string): void;
}
