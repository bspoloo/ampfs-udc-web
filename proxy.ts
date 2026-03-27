import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const publicRoutes = ['/login', '/register', '/unauthorized',];
    if (publicRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    const token = req.cookies.get('access_token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const payload = decodeJwt(token);
        const roles = payload.roles as string[];       
        const protectedRoutes: Record<string, string[]> = {
            '/dashboard': ["admin"],
            '/championships': ["admin", "user"],
            '/player': ["admin", "player"],
            '/referee': ["admin", "referee"],
        };

        let hasAccess = false;
        for (const [route, allowedRoles] of Object.entries(protectedRoutes)) {
            if (pathname.startsWith(route)) {
                hasAccess = roles.some(r => allowedRoles.includes(r));
            }
        }
        if(pathname === '/') {
            return NextResponse.next();
        }
        if (!hasAccess) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        return NextResponse.next();

    } catch (err) {
        console.log("JWT ERROR:", err);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}
export const config = {
    matcher: [
        "/((?!api|_next|favicon.ico|.*\\..*).*)",
    ],
};