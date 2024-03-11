import { User } from '../../interfaces/user.interface';
import { CreateUserDto, UpdatePasswordDto } from './dto/interface';

export interface UserRepository {
  getAll(): User[];
  getById(id: string): User;
  create(dto: CreateUserDto);
  update(id: string, dto: UpdatePasswordDto);
  remove(id: string): void;
}
