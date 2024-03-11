import { Module } from '@nestjs/common';
import { TrackService } from 'src/core/services/track.service';
import { TrackController } from 'src/infrasctructure/controllers/track.controller';
import { DbModule } from './db.module';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
  imports: [DbModule],
})
export class TrackModule {}
