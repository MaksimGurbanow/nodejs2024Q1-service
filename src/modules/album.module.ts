import { Module } from '@nestjs/common';
import { AlbumService } from 'src/core/services/album.service';
import { AlbumController } from 'src/infrasctructure/controllers/album.controller';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
