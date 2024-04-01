import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService:UserService
    ){}

    async register({name, email, password}:RegisterDto){
        const user = await this.userService.fineOneByEmail(email)
        if(user){
            throw new BadRequestException('User alredy exist')
        }
      return  await this.userService.create({
        name,
         email,
          password: await bcrypt.hash(password,10)})
    }

     async login({email, password}:LoginDto){
        const user = await this.userService.fineOneByEmail(email)
        if(!user){
            throw new UnauthorizedException('email is wrong')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(! isPasswordValid){
            throw new UnauthorizedException('password is wrong')

        }
        return user;
    }
}
