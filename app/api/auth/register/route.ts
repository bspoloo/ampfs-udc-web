import { User } from '@/app/interfaces/user.interface';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    const backendRes = await fetch(`${process.env.BACKEND_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    const data = await backendRes.json();    
    if (!backendRes.ok) {
        return NextResponse.json({ message: data.message }, { status: 401 });
    }
    const {user} = data as { user: User };
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('access_token', data.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
    });

    response.cookies.set('refresh_token', data.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
    });

    response.cookies.set('user', JSON.stringify({
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        imageProfile: user.image
    }), {
        httpOnly: false,
        secure: true,
        sameSite: 'lax',
        path: '/',
    });

    return response;
}