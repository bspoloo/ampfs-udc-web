import NextAuth, { Account, Profile, Session } from "next-auth";
import Google from "next-auth/providers/google";
import { JWT } from "next-auth/jwt"
import { SyncUserRequestService } from "@/app/services/auth.service";

declare module "next-auth" {
    export interface Session {
        user: {
            id?: string;
            fullname?: string | "";
            username?: string | "";
            email: string | "";
            roles: string[] | [];
            image: string;
        }
        accessToken: string;
        refreshToken: string;
    }
}

declare module "next-auth/jwt" {
    export interface JWT {
        roles?: string[];
    }
}

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({
            token,
            profile,
            account,
        }: { token: JWT, profile?: Profile, account?: Account | null }): Promise<JWT> {
            if (account && profile) {
                token.id = profile?.sub; // Google ID
                token.email = profile?.email;
                token.fullname = profile?.name;
                token.username = profile?.name;

                const userResponse = await SyncUserRequestService.syncUserRequest(profile);
                // token.backendUserId = userResponse.user;
                token.roles = userResponse.user.roles;
                token.accessToken = userResponse.accessToken;
            }
            return token;
        },
        async session({ session, token }: { session: Session, token: JWT }) {
            session.user.id = token.id as string;
            session.accessToken = token.accessToken as string;
            session.user.roles = token.roles ?? [];
            return session;
        },
    },
    pages: {
        signIn: '/login',
        signOut: '/logout',
        error: '/auth/error'
    }
});

export { handler as GET, handler as POST };