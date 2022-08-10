import { CanActivate, ExecutionContext, flatten, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { UserService } from "src/user/user.service";

import { JwtUtilService } from 'src/utils/jwt.service';



@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(
        private jwtUtil: JwtUtilService,
        private userService: UserService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const ctx = GqlExecutionContext.create(context);
            const { req } = ctx.getContext();
            const token = req.headers.authorization.split(' ')[1];

            if (!token) {
                throw new UnauthorizedException({ amessage: "User is not authenticated" });   
            } 
            const parsedToken = await this.jwtUtil.verifyToekn(token);
            const user  = await this.userService.getUserByEmail(parsedToken.email);
            
            if (!user) {
                return false;
            }
            req.user = user;

            return true;

        } catch (execption) {
            throw new UnauthorizedException({ amessage: "User is not authenticated" });
        }
    }
    
}