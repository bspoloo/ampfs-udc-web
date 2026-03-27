// components/LoginCard.tsx
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { useLogin } from '@/app/hooks/use-login';
import { validateEmail } from '@/app/functions/validate-email';

export default function LoginCard() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                {/* EMAIL */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                {/* PASSWORD */}
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        disabled={loading}
                    />
                </div>

                {/* ERRORES */}
                {(error || validationError) && (
                    <p>{validationError || error}</p>
                )}

                {/* BOTÓN */}
                <button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Iniciar sesión'}
                </button>

                {/* LINK */}
                <p>
                    ¿No tienes cuenta? <a href="/register">Regístrate</a>
                </p>
            </form>
        </div>
    );
}