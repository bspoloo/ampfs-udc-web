import { Profile } from "next-auth";
import { SyncUserResponse } from "../interfaces/auth/syn-user-response.interface";
import { SyncUserRequestService } from "../services/auth.service";

export class RequestRegister {
    static getActionRegister(action: string, profile: Profile) {
        if (action === "login") {
            return SyncUserRequestService.syncUserRequestEmail(profile);
        } else if (action === "register") {
            return SyncUserRequestService.syncUserRequestEmailRegistry(profile);
        } else {
            return null;
        }
    }
}