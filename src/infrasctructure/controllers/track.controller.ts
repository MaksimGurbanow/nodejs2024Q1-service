import { Controller, Get } from '@nestjs/common';
import { TrackService } from 'src/core/services/track.service';

@Controller('/track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
}
