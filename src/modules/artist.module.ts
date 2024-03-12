import { Module } from '@nestjs/common';
import { ArtistService } from 'src/core/services/artist.service';
import { ArtistController } from 'src/infrasctructure/controllers/artist.controller';
import { DbModule } from './db.module';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService],
  imports: [DbModule],
})
export class ArtistModule {}
