import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user.module';
import { AlbumModule } from './modules/album.module';
import { ArtistModule } from './modules/artist.module';
import { FavoritesModule } from './modules/favorites.module';
import { TrackModule } from './modules/track.module';
// import { DbModule } from './modules/db.module';

@Module({
  imports: [
    UserModule,
    AlbumModule,
    ArtistModule,
    // DbModule,
    FavoritesModule,
    TrackModule,
  ],
})
export class AppModule {}
