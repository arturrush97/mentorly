import { Resolver, Query, Context, Args, Mutation } from "@nestjs/graphql";
import { UpdatedUser, User, Users } from "./user.graph.model";
import { UserService } from '../user.service';
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { SeachUser, UserUpdateInput } from "./inputType";

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

    @UseGuards(JwtAuthGuard)
    @Mutation(returns => UpdatedUser)
    async update(@Args('updateUserInput') userData: UserUpdateInput, @Context('req') req) {
        return await this.userService.updateUser(userData, req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Query(returns => [User])
    async find(@Args('searchUser') userData: SeachUser) {
        return await this.userService.searchUser(userData)
    }
}