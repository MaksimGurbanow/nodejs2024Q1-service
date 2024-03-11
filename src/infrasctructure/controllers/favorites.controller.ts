import { Controller, Get } from '@nestjs/common';
import { FavoritesService } from 'src/core/services/favorites.service';

@Controller('/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getAll(): void {
    this.favoritesService.getAll();
  }
}
