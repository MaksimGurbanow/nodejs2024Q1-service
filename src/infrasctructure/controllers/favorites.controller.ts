import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import {
  FavoriteType,
  FavoritesService,
} from 'src/core/services/favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':type/:id')
  async create(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Param('type') type: FavoriteType,
  ) {
    return await this.favoritesService.create(id, type);
  }

  @Get()
  async getAll() {
    return await this.favoritesService.getAll();
  }

  @Delete(':type/:id')
  @HttpCode(204)
  async remove(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Param('type') type: FavoriteType,
  ) {
    return await this.favoritesService.remove(id, type);
  }
}
