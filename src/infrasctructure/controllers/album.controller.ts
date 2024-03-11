import { Controller, Get } from '@nestjs/common';
import { AlbumService } from 'src/core/services/album.service';

@Controller('/album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getAll(): void {
    this.albumService.getAll();
  }
}
