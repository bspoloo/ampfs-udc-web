// app/auth/error/AuthErrorContent.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ERROR_MESSAGES } from '@/app/consts/error-map';
import Image from 'next/image';

export default function AuthErrorContent() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const config = ERROR_MESSAGES[error || 'default'] || ERROR_MESSAGES.default;

    return (

        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ background: 'radial-gradient(ellipse at center, #9B1111 0%, #5A0000 45%, #1E0000 100%)' }}
        >

            <div className="absolute left-[8%] top-1/2 -translate-y-1/2 opacity-40 select-none pointer-events-none z-0">
                <Image
                    src="/logo_white.png"
                    alt=""
                    width={600}
                    height={600}
                    className="object-contain"
                />

            </div>
            <div className="rounded-2xl px-10 py-8 w-full max-w-sm flex flex-col items-center gap-5"
                style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
                }}
            >
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-bold text-white self-center">
                        {config.title}
                    </h1>

                    <p className="text-sm font-medium text-white/80 mb-6">
                        {config.message}
                    </p>

                    <Link
                        href={config.action.href}
                        className="block w-full bg-[#8d0f10] text-white text-center px-4 py-2 rounded-lg hover:bg-[#2d0000] transition-colors"
                    >
                        {config.action.text}
                    </Link>
                </div>
            </div>
        </div>
    );
}