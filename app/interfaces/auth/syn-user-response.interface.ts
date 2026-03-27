import { User } from "../user.interface"

export interface SyncUserResponse {
    user:               User,
    accessToken:        string
    refreshToken:       string
}