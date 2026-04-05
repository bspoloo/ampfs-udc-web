import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const publicRoutes = ['/', '/login', '/register', '/unauthorized', '/auth/error'];

    if (publicRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        const loginUrl = new URL("/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    const protectedRoutes: Record<string, string[]> = {
        '/dashboard': ["admin"],
        '/championships': ["admin", "user"],
        '/player': ["admin", "player"],
        '/referee': ["admin", "referee"],
    };

    let hasAccess = false;

    Object.entries(protectedRoutes).forEach(([route, allowedRoles]) => {
        if (pathname.startsWith(route)) {
            const userRoles = (token?.roles as string[]) || [];
            hasAccess = userRoles.some(role => allowedRoles.includes(role));
        }
    });

    const isProtectedRoute = Object.keys(protectedRoutes).some(route => pathname.startsWith(route));

    if (isProtectedRoute && !hasAccess) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
