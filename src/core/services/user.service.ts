import { UserRepository } from '../repositories/user/UserRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAll() {
    this.userRepository.getAll();
  }
}