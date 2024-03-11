import { Injectable } from '@nestjs/common';
import { DbService } from 'src/infrasctructure/db/db.service';
import { UserRepository } from '../repositories/user/user.repository';
@Injectable()
export class UserService implements UserRepository {
  constructor(private readonly DB: DbService) {}

}
