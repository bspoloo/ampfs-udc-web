// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { User } from '@/app/interfaces/user.interface';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const backendRes = await fetch(`${process.env.BACKEND_API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await backendRes.json();
        
        if (!backendRes.ok) {
            return NextResponse.json(
                { message: data.message || 'Error al registrar usuario' }, 
                { status: backendRes.status }
            );
        }
        
        const { user } = data as { user: User };
        
        return NextResponse.json({ 
            success: true, 
            message: 'Usuario registrado exitosamente',
            user: {
                email: user.email,
                fullname: user.fullname,
                username: user.username
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Error en registro:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' }, 
            { status: 500 }
        );
    }
}