import { Module } from '@nestjs/common';
import { AlbumService } from 'src/core/services/album.service';
import { AlbumController } from 'src/infrasctructure/controllers/album.controller';
import { PrismaService } from 'src/core/services/prisma.service';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService],
  imports: [PrismaService],
})
export class AlbumModule {}
