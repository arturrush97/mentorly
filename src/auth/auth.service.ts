import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, loginDto } from 'src/user/dto/create.user.dto';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { HashService } from 'src/utils/hash.service';
import { JwtUtilService } from 'src/utils/jwt.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private hashService: HashService,
        private jwtUtil: JwtUtilService,
        ) {}

    async login(user: loginDto) {
        const condidate = await this.userService.getUserByEmail(user.email);

        if (!condidate) {
            throw new HttpException('User does not exists', HttpStatus.BAD_REQUEST);
        }

        const passwordEqual = await this.hashService.comparePassword(condidate, user);

        if (!passwordEqual) {
            throw new UnauthorizedException('Incorect password or email');
        }

        const authToken = await this.jwtUtil.generateToken(condidate);
        return {
            user: condidate,
            authToken
        }

    }

    async registration(registrationDto: CreateUserDto) {
        if (registrationDto.password != registrationDto.confirmPassword) {
            throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST)
        }
        const condidate = await this.userService.getUserByEmail(registrationDto.email);
        if (condidate) {
            throw new HttpException('User with this email is already exists in system', HttpStatus.BAD_REQUEST)
        }
        const hasedPassword = await this.hashService.hashPassword(registrationDto.password);
        const user  = await this.userService.createUser({...registrationDto, password: hasedPassword});
        const authToken  = await this.jwtUtil.generateToken(user); 
        return { user, authToken };

    }
}
