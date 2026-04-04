import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET(req: NextRequest) {
    const token = req.cookies.get('access_token')?.value;

    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return NextResponse.json({
            username: payload.username,
            fullname: payload.fullname,
            image: payload.image,
            email: payload.email,
            roles: payload.roles,
            sub: payload.sub
        });

    } catch(err) {
        return NextResponse.json({ error: 'Invalid token' + err, }, { status: 401 });
    }
}