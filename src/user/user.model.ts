import { IsEmail } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { USER_TYPE, WORKING_FIELD } from "src/enumConfigs/enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({
        type: 'enum',
        enum: USER_TYPE,
        default: USER_TYPE.MENTOR
    })
    user_type: USER_TYPE

    @Column()
    position: string;

    @Column({
        type: 'enum',
        enum: WORKING_FIELD,
        default: WORKING_FIELD.IT
    })
    working_field: WORKING_FIELD;

    @Column()
    plans: string;

    @Column({
        unique: true
    })
    @IsEmail()
    email: string;

    @Column()
    education: string;

    @Column()
    experience: string;

    @Column()
    about: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
