import { Module } from '@nestjs/common';
import { FavoritesService } from 'src/core/services/favorites.service';
import { FavoritesController } from 'src/infrasctructure/controllers/favorites.controller';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
