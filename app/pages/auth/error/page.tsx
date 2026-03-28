// app/auth/error/page.tsx
'use client';

import AuthErrorContent from '@/app/components/error/auth-error-content';
import { Suspense } from 'react';

export default function AuthErrorPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-white">Cargando...</div>
            </div>
        }>
            <AuthErrorContent />
        </Suspense>
    );
}