import { Module } from '@nestjs/common';
import { AlbumService } from 'src/core/services/album.service';
import { AlbumController } from 'src/infrasctructure/controllers/album.controller';
import { DbModule } from './db.module';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService],
  imports: [DbModule],
})
export class AlbumModule {}
