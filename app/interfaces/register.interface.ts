import { UserInterface } from "./user.interface";

export interface RegisterInterface extends UserInterface{
    googleId?: string
    numberPhone?: string;
    password: string;
    confirmPassword: string;
}