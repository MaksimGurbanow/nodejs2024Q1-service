import { Module } from '@nestjs/common';
import { FavoritesService } from 'src/core/services/favorites.service';
import { FavoritesController } from 'src/infrasctructure/controllers/favorites.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [PrismaModule],
})
export class FavoritesModule {}
