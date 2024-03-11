import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { AlbumModule } from './modules/album.module';
import { ArtistModule } from './modules/artist.module';
import { FavoritesModule } from './modules/favorites.module';
import { TrackModule } from './modules/track.module';

@Module({
  imports: [
    UserModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    TrackModule,
  ],
})
export class AppModule {}
