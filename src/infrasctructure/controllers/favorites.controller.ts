import { Controller, Get } from '@nestjs/common';
import { FavoritesService } from '../../core/services/Favorites.service';

@Controller()
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getAll(): void {
    this.favoritesService.getAll();
  }
}
