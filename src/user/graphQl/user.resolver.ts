import { Resolver, Query, Context } from "@nestjs/graphql";
import { Me, User, Users } from "./user.graph.model";
import { UserService } from '../user.service';
import { Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Resolver()
export class UserResolver {

    constructor(
        private userService: UserService,
    ) { }


    @Query(returns => User)
    async user() {
        return await this.userService.getUserByEmail('');
    }

    @Query(returns => Users)
    async users() {
        return await this.userService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard)
    @Query(returns => User)
    async me(@Context('req') req) {
        return req.user
    }

}