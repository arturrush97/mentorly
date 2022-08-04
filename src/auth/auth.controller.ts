import { Body, Controller, Post } from '@nestjs/common';
import { loginDto, CreateUserDto } from 'src/user/dto/create.user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) {}
    
    @Post('/login')
    login(@Body() loginDto: loginDto) {
        return this.authService.login(loginDto)
    }

    @Post('/registration')
    registration(@Body() registrationDto: CreateUserDto) {
        return this.authService.registration(registrationDto)
    }

}   
