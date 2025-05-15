import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  login(@Body() dto: CreateUserDto){
    return this.authService.login(dto)
  }

  @Post("/registration") 
  registration(@Body() userDto: CreateUserDto){
    return this.authService.registration(userDto)
  }
}
