import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly aurhService:AuthService
    ){}

    @Post('register')
    register(@Body()
    registerDto:RegisterDto){
        return this.aurhService.register(registerDto)
    }


    @Post('login')
    login(@Body()
     loginDto:LoginDto){
     return this.aurhService.login(loginDto)
    }
}
function Bodi(): (target: AuthController, propertyKey: "login", parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

