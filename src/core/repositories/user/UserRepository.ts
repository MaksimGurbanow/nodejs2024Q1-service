import { User } from 'src/core/models/interface';

export interface UserRepository {
  getAll(): User[];
}
