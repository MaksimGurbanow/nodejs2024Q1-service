import { Injectable } from '@nestjs/common';
import { ArtistRepository } from '../repositories/artist/artist.repository';
import { DbService } from 'src/infrasctructure/db/db.service';

@Injectable()
export class ArtistService implements ArtistRepository{
  constructor(private readonly DB: DbService) {}
}
