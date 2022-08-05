import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcryptjs'
import { loginDto } from "src/user/dto/create.user.dto";
import { User } from "src/user/user.model";

@Injectable()
export class HashService {

    async hashPassword(password: string) {
        return bcrypt.hash(password, 5);
    }

    async comparePassword(dbUser: User, user: loginDto) {
            return bcrypt.compare(user.password, dbUser.password) 
    }
}