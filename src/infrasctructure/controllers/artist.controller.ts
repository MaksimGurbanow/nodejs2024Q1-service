import { Controller, Get } from '@nestjs/common';
import { ArtistService } from '../../core/services/Artist.service';

@Controller('/artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getAll(): void {
    this.artistService.getAll();
  }
}
