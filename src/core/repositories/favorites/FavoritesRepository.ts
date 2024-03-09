import { Favorites } from 'src/core/models/interface';

export interface FavoritesRepository {
  add(): Favorites;
}
