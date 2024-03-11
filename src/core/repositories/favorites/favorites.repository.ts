import { Favorites } from '../../interfaces/favorites.interface';

export interface FavoritesRepository {
  getAll(): Promise<Favorites[]>;
  getById(id: string): Promise<Favorites>;
  create(id: string, type: string): Promise<Favorites>;
  remove(id: string): Promise<void>;
}
