import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfigFactory } from 'src/auth/jwtConfigfactory';
import { SessionJwtStrategy } from 'src/auth/security/session';
import { UserLoginStrategy } from 'src/auth/security/userLogin';
import { AuthService } from 'src/core/services/auth.service';
import { AuthController } from 'src/infrasctructure/controllers/auth.controller';
import { PrismaModule } from './prisma.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtConfigFactory,
    }),
    PrismaModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserLoginStrategy, SessionJwtStrategy],
})
export class AuthModule {}
