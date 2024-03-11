import { Module } from '@nestjs/common';
import { TrackService } from 'src/core/services/track.service';
import { TrackController } from 'src/infrasctructure/controllers/track.controller';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
