import { extend, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/graphQl/user.graph.model';

@ObjectType()
export class Login {

    @Field({ nullable: false })
    user: User;

    @Field({ nullable: false })
    authToken: string;

}


@ObjectType()
export class Register {

    @Field({ nullable: false })
    user: User;

    @Field({ nullable: false })
    authToken: string;

}