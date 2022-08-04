import { USER_TYPE, WORKING_FIELD } from "src/enumConfigs/enum";

export class CreateUserDto {
    readonly name: string;
    readonly surname: string;
    readonly user_type: USER_TYPE;
    readonly position: string;
    readonly working_field: WORKING_FIELD;
    readonly plans: string;
    readonly email: string;
    readonly education: string;
    readonly experience: string;
    readonly about: string;
    readonly password: string;
    readonly confirmPassword: string;
}

export class loginDto {
    readonly email: string;
    readonly password: string;
}

