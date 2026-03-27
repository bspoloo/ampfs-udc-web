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
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    jwt:{
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (profile?.email) {
                try {
                    const userResponse = await SyncUserRequestService.syncUserRequest(profile);
                    return true;
                } catch (error) {
                    console.error("Error syncing user:", error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user, account, profile }) {
            if (account && profile) {
                token.id = profile.sub;
                token.email = profile.email;
                token.fullname = profile.name;
                token.username = profile.email?.split('@')[0];
                token.iamge = profile.image;
                
                try {
                    const userResponse = await SyncUserRequestService.syncUserRequest(profile);
                    token.roles = userResponse.user.roles;
                    token.accessToken = userResponse.accessToken;
                    token.refreshToken = userResponse.refreshToken;
                } catch (error) {
                    console.error("Error in jwt callback:", error);
                    token.roles = ["user"];
                }
            }
            return token;
        },
        async session({ session, token }: { session: Session, token: JWT }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.fullname = token.fullname as string;
                session.user.username = token.username as string;
                session.user.roles = token.roles as string[];
                session.user.image = token.picture as string;
                session.accessToken = token.accessToken as string;
                session.refreshToken = token.refreshToken as string;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
        signOut: '/logout',
        error: '/auth/error'
    },
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.JWT_SECRET,
});

export { handler as GET, handler as POST };