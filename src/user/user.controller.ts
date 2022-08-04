import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.model';
import { UserService } from './user.service';

interface RequestWithUser extends Request {
    user: User
}

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    getMe(@Req() req: RequestWithUser) {
        const user = req.user;
        delete user.password
        return user
    }

    @Get('all')
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.userService.getAllUsers();
    }
}
