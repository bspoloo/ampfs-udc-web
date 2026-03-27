"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { validateEmail } from '@/app/functions/validate-email';
import { DialogDetails } from '../dialog-details/dialog-details';

export default function RegisterCard() {
    const router = useRouter();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Formulario de registro</h2>

                {/* EMAIL */}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={details.email}
                        onChange={(e) =>
                            setDetails({ ...details, email: e.target.value })
                        }
                        required
                    />
                </div>

                {/* PASSWORD */}
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={details.password}
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        required
                        minLength={6}
                    />
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                    <label>Repetir contraseña</label>
                    <input
                        type="password"
                        value={details.confirmPassword}
                        onChange={(e) =>
                            setDetails({ ...details, confirmPassword: e.target.value })
                        }
                        required
                        minLength={6}
                    />
                </div>

                {/* ERROR */}
                {error && <p>{error}</p>}

                {/* BOTÓN */}
                <button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Registrarte'}
                </button>

                {/* LINK */}
                <p>
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </form>

            {/* MODAL */}
            <DialogDetails
                open={open}
                data={details}
                setOpen={setOpen}
            />
        </div>
    );
}