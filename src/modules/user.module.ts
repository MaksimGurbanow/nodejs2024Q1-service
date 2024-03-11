import { Module } from '@nestjs/common';
import { UserService } from 'src/core/services/user.service';
import { UserController } from 'src/infrasctructure/controllers/user.controller';
import { DbModule } from './db.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DbModule],
})
export class UserModule {}
