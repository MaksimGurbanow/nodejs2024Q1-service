import { Injectable } from '@nestjs/common';
import { AlbumRepository } from '../repositories/album/album.repository';
import { DbService } from 'src/infrasctructure/db/db.service';

@Injectable()
export class AlbumService implements AlbumRepository{
  constructor(private readonly DB: DbService) {}
}
