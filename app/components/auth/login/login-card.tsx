"use client"

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { useLogin } from '@/app/hooks/use-login';
import { validateEmail } from '@/app/functions/validate-email';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginCard() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [shouldLogin, setShouldLogin] = useState(false);
    const [validationError, setValidationError] = useState('');

    const { userResponse, loading, error, resetError } = useLogin(
        { email, password },
        shouldLogin
    );

    useEffect(() => {
        if (userResponse) {
            router.push('/');
            router.refresh();
        }
    }, [userResponse, router]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        resetError?.();
        setValidationError('');

        if (!validateEmail(email.trim())) {
            setValidationError("El correo debe ser válido");
            return;
        }

        setShouldLogin(prev => !prev);
    };

    return (
        <div className="rounded-2xl px-10 py-8 w-full max-w-sm flex flex-col items-center gap-5"
            style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            }}
        >

    

            {/* TÍTULO */}
            <h2 className="text-2xl font-bold text-white self-center">Iniciar sesión</h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="username@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="border border-white/30 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400 transition disabled:opacity-50 bg-white/10 text-white placeholder:text-white/40"
                    />
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm font-medium text-white/80">
                        Contraseña
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            disabled={loading}
                            className="w-full border border-white/30 rounded-lg px-3 py-2 pr-10 text-sm outline-none focus:border-amber-400 transition disabled:opacity-50 bg-white/10 text-white placeholder:text-white/40"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </div>

                {/* FORGOT PASSWORD */}
                <a
                    href="#"
                    className="text-xs text-white/60 hover:text-amber-400 self-start -mt-2 transition"
                >
                    ¿Olvidaste tu contraseña?
                </a>

                {/* ERRORES */}
                {(error || validationError) && (
                    <p className="text-red-500 text-xs">{validationError || error}</p>
                )}

                {/* BOTÓN SIGN IN */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg py-2 text-sm transition disabled:opacity-60 cursor-pointer"
                >
                    {loading ? 'Cargando...' : 'Iniciar sesión'}
                </button>
            </form>

            {/* OR CONTINUE WITH */}
            <div className="flex items-center gap-3 w-full">
                <div className="flex-1 h-px bg-white/20" />
                <span className="text-xs text-white/50 whitespace-nowrap">o continuar con</span>
                <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* GOOGLE BUTTON */}
            <button
                type="button"
                className="w-full flex items-center justify-center border border-white/30 rounded-lg py-2 bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
                <svg width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
            </button>

            {/* REGISTER LINK */}
            <p className="text-xs text-white/50 text-center">
                ¿No tienes cuenta?{' '}
                <a href="/register" className="font-bold text-white hover:text-amber-400 transition">
                    Regístrate gratis
                </a>
            </p>
        </div>
    );
}
