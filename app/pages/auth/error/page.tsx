'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { errorMessages } from '@/app/consts/error-map';

export default function AuthError() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const errorMessage = errorMessages[error || 'default'] || errorMessages.default;
    const isRegistrationRequired = error?.startsWith('/register');
    
    if (isRegistrationRequired) {
        const registerUrl = error;
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                    <div className="text-center mb-6">
                        <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            Cuenta no registrada
                        </h1>
                        <p className="text-gray-600">
                            Esta cuenta de Google no está registrada en nuestro sistema.
                        </p>
                    </div>
                    <Link 
                        href={registerUrl!}
                        className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Registrarse ahora
                    </Link>
                    <Link 
                        href="/login"
                        className="block w-full text-center mt-3 text-gray-600 hover:text-gray-800"
                    >
                        Volver al inicio de sesión
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <div className="text-center mb-6">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Error de autenticación
                    </h1>
                    <p className="text-gray-600">
                        {errorMessage}
                    </p>
                    {error && (
                        <p className="text-sm text-gray-500 mt-2">
                            Código de error: {error}
                        </p>
                    )}
                </div>
                <Link 
                    href="/login"
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Volver al inicio de sesión
                </Link>
            </div>
        </div>
    );
}