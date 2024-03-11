import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Login must be a string.' })
  @IsNotEmpty({ message: 'Login is required' })
  login: string;

  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}

export class UpdatePasswordDto {
  @IsString({ message: 'Login must be a string.' })
  @IsNotEmpty({ message: 'Login is required' })
  oldPassword: string; // previous password

  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  newPassword: string; // new password
}
