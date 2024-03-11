import { Module } from '@nestjs/common';
import { UserService } from 'src/core/services/user.service';
import { UserController } from 'src/infrasctructure/controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
