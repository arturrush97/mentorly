import { Field, InputType } from "@nestjs/graphql";

import { USER_TYPE, WORKING_FIELD } from "src/enumConfigs/enum";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UserUpdateInput {
    @IsNotEmpty()
    @Field({ nullable: false })
    name: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    surname: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    user_type: USER_TYPE;

    @IsNotEmpty()
    @Field({ nullable: false })
    position: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    working_field: WORKING_FIELD;

    @IsNotEmpty()
    @Field({ nullable: false })
    plans: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    email: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    education: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    experience: string;

    @IsNotEmpty()
    @Field({ nullable: false })
    about: string;   
}

@InputType()
export class SeachUser {
    // @IsNotEmpty()
    @Field({ nullable: true })
    name: string;

    // @IsNotEmpty()
    @Field({ nullable: true })
    position: string;

    // @IsNotEmpty()
    @Field({ nullable: true })
    user_type: USER_TYPE
}