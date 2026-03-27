"use client";

import React, { useState } from "react";
import { validateEmail } from '@/app/functions/validate-email';
import { DialogDetails } from '../dialog-details/dialog-details';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

export default function RegisterCard() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [details, setDetails] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!details.email.trim()) {
            setError("El correo es requerido");
            return;
        }

        if (!validateEmail(details.email.trim())) {
            setError("El correo debe ser válido");
            return;
        }

        if (details.password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (details.password !== details.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setOpen(true);
    };

    return (
        <div
            className="rounded-2xl px-10 py-8 w-full max-w-sm flex flex-col items-center gap-5"
            style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            }}
        >
           

            {/* TÍTULO */}
            <h2 className="text-2xl font-bold text-white self-center">Registro</h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-white/80">Correo electrónico</label>
                    <input
                        type="email"
                        placeholder="username@gmail.com"
                        value={details.email}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        required
                        disabled={loading}
                        className="border border-white/30 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400 transition disabled:opacity-50 bg-white/10 text-white placeholder:text-white/40"
                    />
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-white/80">Contraseña</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Contraseña"
                            value={details.password}
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
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

                {/* CONFIRM PASSWORD */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-white/80">Confirmar contraseña</label>
                    <div className="relative">
                        <input
                            type={showConfirm ? 'text' : 'password'}
                            placeholder="Confirmar contraseña"
                            value={details.confirmPassword}
                            onChange={(e) => setDetails({ ...details, confirmPassword: e.target.value })}
                            required
                            minLength={6}
                            disabled={loading}
                            className="w-full border border-white/30 rounded-lg px-3 py-2 pr-10 text-sm outline-none focus:border-amber-400 transition disabled:opacity-50 bg-white/10 text-white placeholder:text-white/40"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(p => !p)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                            tabIndex={-1}
                        >
                            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </div>

                {/* ERROR */}
                {error && <p className="text-red-400 text-xs">{error}</p>}

                {/* BOTÓN */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg py-2 text-sm transition disabled:opacity-60 cursor-pointer"
                >
                    {loading ? 'Cargando...' : 'Regístrate gratis'}
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

            {/* LOGIN LINK */}
            <p className="text-xs text-white/50 text-center">
                ¿Ya tienes cuenta?{' '}
                <a href="/login" className="font-bold text-white hover:text-amber-400 transition">
                    Inicia sesión
                </a>
            </p>

            {/* MODAL */}
            <DialogDetails open={open} data={details} setOpen={setOpen} />
        </div>
    );
}
