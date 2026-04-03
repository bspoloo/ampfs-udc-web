import { UserInterface } from "../user.interface"

export interface SyncUserResponse {
    user:               UserInterface,
    accessToken:        string
    refreshToken:       string
}