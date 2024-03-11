import { Module } from '@nestjs/common';
import { ArtistService } from 'src/core/services/artist.service';
import { ArtistController } from 'src/infrasctructure/controllers/artist.controller';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
