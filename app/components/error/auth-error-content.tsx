// app/auth/error/AuthErrorContent.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { errorMessages } from '@/app/consts/error-map';

export default function AuthErrorContent() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const config = errorMessages[error || 'default'] || errorMessages.default;
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {config.title}
                    </h1>
                    
                    <p className="text-gray-600 mb-6">
                        {config.message}
                    </p>
                    
                    <Link 
                        href={config.action.href}
                        className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        {config.action.text}
                    </Link>
                </div>
            </div>
        </div>
    );
}