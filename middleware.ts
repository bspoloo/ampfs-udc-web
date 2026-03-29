import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req: NextRequestWithAuth) {
        const { pathname } = req.nextUrl;
        const token = req.nextauth.token;

        const publicRoutes = ['/login', '/register', '/unauthorized', '/auth/error'];

        if (publicRoutes.some(route => pathname.startsWith(route))) {
            return NextResponse.next();
        }

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
                console.log(`Ruta ${route} - Roles usuario: ${userRoles} - Acceso: ${hasAccess}`);
            }
        });

        const isProtectedRoute = Object.keys(protectedRoutes).some(route => pathname.startsWith(route));

        if(pathname === '/') {
            return NextResponse.next();
        }
        
        if (isProtectedRoute && !hasAccess) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                return true;
            }
        }
    }
);

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};