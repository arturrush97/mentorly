import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtUtilService } from 'src/utils/jwt.service';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtUtilService
    ) {}

    async createUser(newUser: CreateUserDto) {
        const createdUser = await this.usersRepository.save(newUser);
        return createdUser;
    }

    async getUserByEmail(userEmail: string) {
        return await this.usersRepository.findOneBy({
            email: userEmail
        });
    }

    async getAllUsers() {
        return await this.usersRepository.find();
    }

    async searchUser(query) {
        return await this.usersRepository.find(
            {
                where: query
            }
        );

    }

    async updateUser(newUserData, user) {
        let newToken;
        if (newUserData.email !== user.email) {
            const doesUuserExists = await this.getUserByEmail(newUserData.email);
            if (doesUuserExists) {
                throw new HttpException('User with this email is already exists in system', HttpStatus.BAD_REQUEST)
            }
            newToken = await this.jwtService.generateToken(newUserData);
        }

        const updatedUser = await this.usersRepository
            .createQueryBuilder()
            .update(User, newUserData)
            .where({ id: user.id })
            .returning('*')
            .updateEntity(true)
            .execute();

        return {
            user: updatedUser.raw[0],
            authToken: newToken
        }
    }
}
