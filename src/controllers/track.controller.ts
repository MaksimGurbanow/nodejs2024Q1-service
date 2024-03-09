import { Controller, Get } from '@nestjs/common';
import { TrackService } from 'src/core/services/Track.service';

@Controller('/track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getAll(): void {
    this.trackService.getAll();
  }
}
