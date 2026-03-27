export interface RegisterDto {
    googleId?: string
    fullName: string;
    username: string;
    email: string;
    imageProfile?: string;
    password: string;
    confirmPassword: string;
    roles: string[];
}