import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtUtilService {

    constructor(private jwtService: JwtService) {}

    async generateToken(user: User) {
        const payload = { email: user.email, id: user.id };
        return await this.jwtService.sign(payload)
    }

}