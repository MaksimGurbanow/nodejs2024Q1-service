import { Module } from '@nestjs/common';
import { UserService } from 'src/core/services/user.service';
import { UserController } from 'src/infrasctructure/controllers/user.controller';
import { PrismaService } from 'src/core/services/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaService],
})
export class UserModule {}
