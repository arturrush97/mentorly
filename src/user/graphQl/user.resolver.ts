import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./user.graph.model";
import { UserService } from '../user.service';

@Resolver()
export class UserResolver {

    constructor(
        private userService: UserService,
    ) { }


    @Query(returns => User)
    async user() {
        return await this.userService.getUserByEmail('');
    }

}