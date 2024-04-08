import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { AuthGuard } from '@nestjs/passport';
import { UserToken } from 'src/core/interfaces/token.interface';
import { skipAuth } from 'src/auth/decorators/skip.decorator';
import { UpdateAuthDto } from 'src/auth/dto/updateAuth';
import { RefreshTokenAuthGuard } from 'src/auth/guards/refreshTokenAuth.guard';
import { UserCredentialsValidationGuard } from 'src/auth/guards/userCredentialsValidation.guard';
import { UserEntity } from 'src/core/entities/user.entity';
import { CreateUserDto } from 'src/core/repositories/user/dto/interface';
import { AuthService } from 'src/core/services/auth.service';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    login: string;
    password: string;
  };
}

@skipAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(UserCredentialsValidationGuard, AuthGuard('local'))
  @Post('login')
  @HttpCode(StatusCodes.OK)
  login(@Req() req: AuthenticatedRequest): Promise<UserToken> {
    return this.authService.loginUser(req.user);
  }

  @Post('signup')
  @HttpCode(StatusCodes.CREATED)
  signup(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.authService.registerUser(createUserDto);
  }

  @UseGuards(RefreshTokenAuthGuard)
  @Post('refresh')
  @HttpCode(StatusCodes.OK)
  async refresh(@Body() updateAuthDto: UpdateAuthDto) {
    return await this.authService.refreshToken(updateAuthDto);
  }
}
