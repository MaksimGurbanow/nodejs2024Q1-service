import { Module } from '@nestjs/common';
import { TrackService } from 'src/core/services/track.service';
import { TrackController } from 'src/infrasctructure/controllers/track.controller';
import { PrismaService } from 'src/core/services/prisma.service';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
  imports: [PrismaService],
})
export class TrackModule {}
