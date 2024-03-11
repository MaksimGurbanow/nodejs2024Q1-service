import { Entity } from 'src/core/services/favorites.service';
import { Favorites } from '../../interfaces/favorites.interface';

export interface FavoritesRepository {
  getAll(): Promise<Favorites>;
  create(id: string, type: string): Promise<Entity>;
  remove(id: string, type: string): Promise<void>;
}
