import { Exclude } from 'class-transformer';
import { User } from '../interfaces/user.interface';
import { v4 as uuid4 } from 'uuid';

export class UserEntity implements User {
  id: string;
  login: string;
  createdAt: number;
  updatedAt: number;
  version: number;

  @Exclude()
  password: string;

  constructor({ login, password }: Partial<UserEntity>) {
    this.id = uuid4();
    this.login = login;
    this.version = 1;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.password = password;
  }
}