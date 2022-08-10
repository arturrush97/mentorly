import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { USER_TYPE, WORKING_FIELD } from 'src/enumConfigs/enum';

@ObjectType()
export class User {
    @Field(type => ID)
    id: number;

    @Field({ nullable: false })
    name: string;

    @Field({ nullable: false })
    surname: string;

    @Field({ nullable: false })
    user_type: USER_TYPE;
    
    @Field({ nullable: false })
    position: string;

    @Field({ nullable: false })
    working_field: WORKING_FIELD;

    @Field({ nullable: false })
    plans: string;

    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    education: string;

    @Field({ nullable: false })
    experience: string;

    @Field({ nullable: false })
    about: string;
}

@ObjectType()
export class Users {
    @Field(type => [User])
    users: User[];
}

@ObjectType()
export class Me {
    @Field(type => User)
    user: User
} 

@ObjectType()
export class UpdatedUser {
    @Field(type => User)
    user: User

    @Field({ nullable: true })
    authToken: string;
} 