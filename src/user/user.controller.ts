import { Body, Controller, Get, Put, Req, UseGuards, Query } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDto, UserSearchDto } from './dto/create.user.dto';
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

    @Get('')
    @UseGuards(JwtAuthGuard)
    searchUser(@Query() query: UserSearchDto) {
        return this.userService.searchUser(query)
    }

    @Put('update')
    @UseGuards(JwtAuthGuard)
    updateUser(@Req() req: RequestWithUser, @Body() requestBody: UpdateUserDto) {
        return this.userService.updateUser(requestBody, req.user);
    }
}
