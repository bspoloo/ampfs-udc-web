import { Profile } from "next-auth";
import { SyncUserResponse } from "../interfaces/auth/syn-user-response.interface";
import { BodyRequest } from "../classes/body-request";
import { SyncUserRequest } from "../interfaces/auth/syn-user-request.interface";

export class SyncUserRequestService {
    public static async syncUserRequest(profile : Profile): Promise<SyncUserResponse> {
        try {
            const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: BodyRequest.EntityToBody<SyncUserRequest>({
                    fullname: profile?.email!,
                    username: profile?.email!,
                    email: profile?.email!,
                    image: (profile as Profile & { picture?: string })?.picture!,
                    googleId: profile?.sub!,
                }),
            })
            const userInfo: SyncUserResponse = await res.json();
            return userInfo;
        } catch (err) {
            // console.error("Error syncing user:", err);
            throw new Error("Error syncing user: " + err);
        }
    }
}