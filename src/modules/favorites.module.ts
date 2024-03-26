import { Module } from '@nestjs/common';
import { FavoritesService } from 'src/core/services/favorites.service';
import { FavoritesController } from 'src/infrasctructure/controllers/favorites.controller';
import { PrismaService } from 'src/core/services/prisma.service';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [PrismaService],
})
export class FavoritesModule {}
