import { Injectable } from '@nestjs/common';
import { FavoritesRepository } from '../repositories/favorites/favorites.repository';
import { DbService } from 'src/infrasctructure/db/db.service';

@Injectable()
export class FavoritesService implements FavoritesRepository{
  constructor(private readonly DB: DbService) {}

}
