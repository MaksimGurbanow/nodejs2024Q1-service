import { Exclude } from 'class-transformer';
import { User } from '../interfaces/user.interface';
import { v4 as uuid4 } from 'uuid';
import { User as PrismaUser } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  login: string;
  createdAt: number;
  updatedAt: number;
  version: number;

  @Exclude()
  password: string;

  constructor(user: Partial<PrismaUser>) {
    this.id = user.id;
    this.login = user.login;
    this.version = user.version;
    this.createdAt = new Date(user.createdAt).getTime();
    this.updatedAt = new Date(user.updatedAt).getTime();
    this.password = user.password;
  }
}
