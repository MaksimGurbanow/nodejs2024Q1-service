import { User } from '../../interfaces/user.interface';
import { CreateUserDto, UpdatePasswordDto } from './dto/interface';

export interface UserRepository {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User>;
  create(dto: CreateUserDto): Promise<User>;
  update(id: string, dto: UpdatePasswordDto): Promise<User>;
  remove(id: string): Promise<User>;
}
