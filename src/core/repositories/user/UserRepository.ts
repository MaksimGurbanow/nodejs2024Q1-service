import { User } from './interface/user.interface';
import { CreateUserDto, UpdatePasswordDto } from './dto/interface';

export interface UserRepository {
  getAll(): User[];
  getById(id: string): User;
  create(dto: CreateUserDto): void;
  update(id: string, dto: UpdatePasswordDto): void;
  remove(id: string): void;
}
