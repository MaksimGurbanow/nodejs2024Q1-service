import { Module } from '@nestjs/common';
import { PrismaService } from '../core/services/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
