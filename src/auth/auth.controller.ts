import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly aurhService:AuthService
    ){}

    @Post('register')
    register(){
        return this.aurhService.register()
    }


    @Post('login')
    login(){
     return this.aurhService.login()
    }
}
