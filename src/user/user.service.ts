import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
    async createUser(newUser: CreateUserDto) { 
        const createdUser = await this.usersRepository.save(newUser);
        return createdUser;
    }

    async getUserByEmail(email: string) {
        return await this.usersRepository.findOne({ 
            where: { 
                email: email 
            } 
        });  
    }

    
    async getAllUsers() {
        return await this.usersRepository.find(); 
    }
}
