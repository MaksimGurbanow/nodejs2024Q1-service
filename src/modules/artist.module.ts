import { Module } from '@nestjs/common';
import { ArtistService } from 'src/core/services/artist.service';
import { ArtistController } from 'src/infrasctructure/controllers/artist.controller';
import { PrismaService } from 'src/core/services/prisma.service';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService],
  imports: [PrismaService],
})
export class ArtistModule {}
