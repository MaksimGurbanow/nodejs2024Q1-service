import { Module } from '@nestjs/common';
import { FavoritesService } from 'src/core/services/favorites.service';
import { FavoritesController } from 'src/infrasctructure/controllers/favorites.controller';
import { DbModule } from './db.module';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [DbModule],
})
export class FavoritesModule {}
