import { User } from 'src/core/models/interface';
import { CreateUserDto, UpdatePasswordDto } from './dto/interface';

export interface UserRepository {
  getAll(): User[];

  getById(id: string | number): User;

  create(dto: CreateUserDto): void;

  update(dto: UpdatePasswordDto): void;

  delete(id: string | number): void;
}
