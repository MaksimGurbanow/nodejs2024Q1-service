import { Module } from '@nestjs/common';
import { UserService } from 'src/core/services/user.service';
import { UserController } from 'src/infrasctructure/controllers/user.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
