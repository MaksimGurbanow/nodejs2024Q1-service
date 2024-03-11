import { Controller, Get } from '@nestjs/common';
import { ArtistService } from 'src/core/services/artist.service';

@Controller('/artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getAll(): void {
    this.artistService.getAll();
  }
}
