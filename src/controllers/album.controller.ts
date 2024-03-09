import { Controller, Get } from '@nestjs/common';
import { AlbumService } from '../core/services/Album.service';

@Controller()
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getAll(): void {
    this.albumService.getAll();
  }
}
