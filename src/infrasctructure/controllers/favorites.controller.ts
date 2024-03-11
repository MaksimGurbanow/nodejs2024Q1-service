import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { FavoritesService } from 'src/core/services/favorites.service';

@Controller('favs')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoritesService) {}

  @Post(':type/:id')
  create(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Param('type') type: string,
  ) {
    return this.favoriteService.create(id, type);
  }

  @Get()
  getAll() {
    return this.favoriteService.getAll();
  }

  @Delete(':type/:id')
  @HttpCode(204)
  remove(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Param('type') type: string,
  ) {
    return this.favoriteService.remove(id, type);
  }
}
