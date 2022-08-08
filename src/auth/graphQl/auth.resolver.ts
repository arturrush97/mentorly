import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "src/user/user.service";
import { Login, Register } from "./auth.graph.model";
import { AuthService } from "../auth.service";
import { LoginInput, RegistrationInput } from "../graphQl/inputType"


@Resolver()
export class AuthResolver {

    constructor(
        private authService: AuthService
    ) { }

    @Query(returns => Login)
    async Login(@Args('loginUserData') loginData: LoginInput) {
        return await this.authService.login(loginData)
    }

    @Mutation(returns => Register)
    async registration(@Args('createUserInput') userData: RegistrationInput) {
        return await this.authService.registration(userData)
    }
}

