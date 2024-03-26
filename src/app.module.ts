import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user.module';
import { AlbumModule } from './modules/album.module';
import { ArtistModule } from './modules/artist.module';
import { FavoritesModule } from './modules/favorites.module';
import { TrackModule } from './modules/track.module';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [
    UserModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    TrackModule,
    PrismaModule,
  ],
})
export class AppModule {}
