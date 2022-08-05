import { IsNotEmpty, IsOptional } from "class-validator";
import { USER_TYPE, WORKING_FIELD } from "src/enumConfigs/enum";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    surname: string;

    @IsNotEmpty()
    user_type: USER_TYPE;

    @IsNotEmpty()
    position: string;

    @IsNotEmpty()
    working_field: WORKING_FIELD;

    @IsNotEmpty()
    plans: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    education: string;

    @IsNotEmpty()
    experience: string;

    @IsNotEmpty()
    about: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    confirmPassword: string;
}

export class loginDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}


export class UpdateUserDto {
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    surname: string;

    @IsNotEmpty()
    @IsOptional()
    user_type: USER_TYPE;

    @IsNotEmpty()
    @IsOptional()
    position: string;

    @IsNotEmpty()
    @IsOptional()
    working_field: WORKING_FIELD;

    @IsNotEmpty()
    @IsOptional()
    plans: string;

    @IsNotEmpty()
    @IsOptional()
    email: string;

    @IsNotEmpty()
    @IsOptional()
    education: string;

    @IsNotEmpty()
    @IsOptional()
    experience: string;
    
    @IsNotEmpty()
    @IsOptional()
    about: string;
}


export class UserSearchDto {
    @IsOptional()
    name?: string;

    @IsOptional()
    position: string;

    @IsOptional()
    user_type: USER_TYPE;
}
