import { Module } from '@nestjs/common';
import { AlbumService } from 'src/core/services/album.service';
import { AlbumController } from 'src/infrasctructure/controllers/album.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService],
  imports: [PrismaModule],
})
export class AlbumModule {}
