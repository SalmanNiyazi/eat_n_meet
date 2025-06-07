import { IsEmail, IsString, IsPhoneNumber } from "class-validator";

export class CreateUserDto{
    @IsString()
    firstName: string;
    
    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    mobileNumber: string;

    @IsString()
    gender: string;

    @IsString()
    password: string;
}