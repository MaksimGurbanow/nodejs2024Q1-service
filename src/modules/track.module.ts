import { Module } from '@nestjs/common';
import { TrackService } from 'src/core/services/track.service';
import { TrackController } from 'src/infrasctructure/controllers/track.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
  imports: [PrismaModule],
})
export class TrackModule {}
